const PiranhaMessage = require('../../PiranhaMessage')

class LogicUpgradeHeroCommand extends PiranhaMessage {
  constructor (bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 527
    this.version = 0
  }

  async decode () {
  }

  async process () {
  }
}

module.exports = LogicUpgradeHeroCommand