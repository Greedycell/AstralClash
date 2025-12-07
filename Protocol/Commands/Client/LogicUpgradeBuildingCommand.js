const PiranhaMessage = require('../../PiranhaMessage')

class LogicUpgradeBuildingCommand extends PiranhaMessage {
  constructor (bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 502
    this.version = 0
  }

  async decode () {
  }

  async process () {
  }
}

module.exports = LogicUpgradeBuildingCommand