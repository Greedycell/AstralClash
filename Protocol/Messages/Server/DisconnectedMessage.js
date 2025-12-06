const PiranhaMessage = require('../../PiranhaMessage')

class DisconnectedMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 25892
    this.client = client
    this.version = 0
  }

  async encode () {
    this.writeVInt(1)
  }
}

module.exports = DisconnectedMessage