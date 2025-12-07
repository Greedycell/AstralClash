const PiranhaMessage = require('../../../PiranhaMessage')

class AvatarStreamMessage extends PiranhaMessage {
  constructor (client, player) {
    super()
    this.id = 24411
    this.client = client
    this.player = player
    this.version = 0
  }
  
  decode () {
  }

  encode () {
    this.writeInt(-1)
  }
}

module.exports = AvatarStreamMessage