const PiranhaMessage = require('../../PiranhaMessage')

class UnknownPacketMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 10099
    this.version = 0
  }

  async decode () {
  }

  async process () {
  }
}

module.exports = UnknownPacketMessage
