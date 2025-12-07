const PiranhaMessage = require('../../PiranhaMessage')

class LogicUpgradeMultipleBuildingsCommand extends PiranhaMessage {
  constructor (bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 549
    this.version = 0
  }

  async decode () {
  }

  async process () {
  }
}

module.exports = LogicUpgradeMultipleBuildingsCommand