const PiranhaMessage = require('../../PiranhaMessage')

class LogicUpgradeUnitCommand extends PiranhaMessage {
  constructor (bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 516
    this.version = 0
  }

  async decode () {
  }

  async process () {
  }
}

module.exports = LogicUpgradeUnitCommand