const ByteArray = require('../../../ByteStream/ByteArray')
const PiranhaMessage = require('../../PiranhaMessage')
/*const LogicHome = require('../../../Logic/LogicHome')
const LogicAvatar = require('../../../Logic/LogicAvatar')*/

class VisitedHomeDataMessage extends PiranhaMessage {
  constructor (client, player) {
    super()
    this.id = 25880
    this.client = client
    this.player = player
    this.version = 0
  }

  async encode () {
    this.writeByte(0x06)
    this.writeByte(0x00)
    this.writeByte(0x7F)
    this.writeByte(ByteArray.hexToBytes("00 01 00 00 01 00 00 00 00 02 00 00 01 00 00 00 00 0E 00 00 01 00 00 00 00 8F 01 00 00 01 00 00 00 00 8E 01 00 00 01 00 00 00 00 04 00 00 01 00 00 00 00"))
    this.writeLong(this.client.player.highID, this.client.player.lowID)
    this.writeByte(0x00)
    this.writeByte(0x00)
    this.writeByte(0x01)
    //new LogicHome(this.client, this.player).send()
    this.writeByte(5)
    //new LogicAvatar(this.client, this.player).send()
    this.writeByte(0)
  }
}

module.exports = VisitedHomeDataMessage