console.clear();

config = require('./config');

const figlet = require('figlet');
const net = require('net')
const MessageFactory = require('./Protocol/MessageFactory')
const server = new net.Server()
const Messages = new MessageFactory()
const Crypto = require("./Crypto")
const Player = require('./Logic/Player')

const PORT = config.gamePort;

server.on('connection', async (client) => {
  client.setNoDelay(true)
  client.log = function (text) {
    if (config.IP_Debug)
    {
      return console.log(`[*] >> [${this.remoteAddress.split(':').slice(-1)}] >> ${text}`)
    }
    else
    {
      return console.log(`${text}`)
    }
  }

  if (config.IP_Debug)
  {
    client.log('A wild connection appeared!')
  }
  else
  {
    client.log('[*] >> A wild connection appeared!')
  }

  client.crypto = new Crypto()
  const packets = Messages.getPackets();

  client.player = new Player()

  client.on('data', async (packet) => {
    const message = {
      id: packet.readUInt16BE(0),
      len: packet.readUIntBE(2, 3),
      version: packet.readUInt16BE(5),
      payload: packet.slice(7, this.len),
      client,
    }
    
    message.payload = await client.crypto.decrypt(message.payload)

    if (packets.indexOf(String(message.id)) !== -1) {
      try {
        const packet = new (Messages.handle(message.id))(message.payload, client)

        console.log(`[*] >> Gotcha ${message.id} (${packet.constructor.name}) packet! `)

        await packet.decode()
        await packet.process()
      } catch (e) {
        console.log(e)
      }
    } else {
      console.log(`[*] >> Gotcha undefined ${message.id} packet!`)
    }
  })

  client.on('end', async () => {
    if (config.IP_Debug)
    {
      return client.log('Client disconnected.')
    }
    else
    {
      return client.log('[*] >> Client disconnected.')
    }
  })

  client.on('error', async error => {
    try {
      console.log('[X] >> A wild error!')
      console.log(error)
      client.destroy()
    } catch (e) { }
  })
})

console.log(figlet.textSync('AstralClash'));
console.log('Server created by @Greedycell on Github!');
console.log();

server.once('listening', () => console.log(`[SERVER] >> Server started on ${PORT} port!`))
server.listen(PORT)


process.on("uncaughtException", e => console.log(e));

process.on("unhandledRejection", e => console.log(e));
