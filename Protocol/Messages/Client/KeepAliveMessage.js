const PiranhaMessage = require('../../PiranhaMessage')
const KeepAliveOkMessage = require('../Server/KeepAliveOkMessage')

class KeepAliveMessage extends PiranhaMessage {
  constructor (bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 10108
    this.version = 0
  }

  async decode () {

  }

  async process () {
    new KeepAliveOkMessage(this.client, this.player).send()
  }
}

module.exports = KeepAliveMessage