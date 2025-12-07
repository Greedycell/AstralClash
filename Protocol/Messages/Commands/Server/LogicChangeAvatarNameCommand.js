const PiranhaMessage = require('../../PiranhaMessage')

class LogicChangeAvatarNameCommand extends PiranhaMessage {
  constructor (client, player, avatarName, nameChangeState) {
    super()
    this.id = 3
    this.version = 0
    this.client = client
    this.player = player

    this.avatarName = avatarName
    this.nameChangeState = nameChangeState
  }

  encode () {
    this.writeString(this.avatarName) // avatarName
    this.writeInt(1) // nameChangeState
  }
}

module.exports = LogicChangeAvatarNameCommand