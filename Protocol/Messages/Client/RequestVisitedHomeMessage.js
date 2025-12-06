const PiranhaMessage = require('../../PiranhaMessage')
const VisitedHomeDataMessage = require('../Server/VisitedHomeDataMessage')

class RequestVisitedHomeMessage extends PiranhaMessage {
  constructor (bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 19860
    this.version = 0
  }

  async decode () {
    this.client.player.lowID = this.readLong()[1]
  }

  async process () {
    console.log(`lowID: ${this.client.player.lowID}`);

    new VisitedHomeDataMessage(this.client, this.player).send()
  }
}

module.exports = RequestVisitedHomeMessage