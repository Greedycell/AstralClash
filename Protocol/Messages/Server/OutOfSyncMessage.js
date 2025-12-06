const PiranhaMessage = require('../../PiranhaMessage')

class OutOfSyncMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 24104
    this.client = client
    this.version = 0
  }

  async encode () {
    this.writeInt(0) // m_serverChecksum
    this.writeInt(0) // m_clientChecksum
    this.writeInt(0) // m_subtick

    this.writeBoolean(false)
  }
}

module.exports = OutOfSyncMessage