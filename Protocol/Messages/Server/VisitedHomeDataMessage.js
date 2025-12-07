const ByteArray = require('../../../ByteStream/ByteArray')
const PiranhaMessage = require('../../PiranhaMessage')
const OwnHomeDataMessage = require('./OwnHomeDataMessage')

class VisitedHomeDataMessage extends PiranhaMessage {
  constructor (client, player) {
    super()
    this.id = 24113
    this.client = client
    this.player = player
    this.version = 0
  }

  async encode () {
    this.writeInt(0) // m_secondsSinceLastSave
    this.writeInt(0) // m_currentTimestamp

    new OwnHomeDataMessage(this.client, this.player).send()
    this.writeInt(0)

    /*if (this.m_visitorLogicClientAvatar != null) {
      this.m_stream.WriteBoolean(true)
      this.m_visitorLogicClientAvatar.Encode(this.m_stream)
    }
    else {*/
      this.m_stream.WriteBoolean(false)
    //}
  }
}

module.exports = VisitedHomeDataMessage