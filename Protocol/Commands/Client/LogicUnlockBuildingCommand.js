const PiranhaMessage = require('../../PiranhaMessage')

class LogicUnlockBuildingCommand extends PiranhaMessage {
  constructor (bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 520
    this.version = 0
  }

  async decode () {
  }

  async process () {
  }
}

module.exports = LogicUnlockBuildingCommand