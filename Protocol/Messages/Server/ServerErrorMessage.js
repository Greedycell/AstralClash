const PiranhaMessage = require('../../PiranhaMessage')

class ServerErrorMessage extends PiranhaMessage {
  constructor (client, player, msg, errCode) {
    super()
    this.id = 24115
    this.version = 0
    this.client = client
    this.player = player

    this.msg = msg
  }

  encode () {
    this.writeString(this.msg); //Reason
  }
}

module.exports = ServerErrorMessage