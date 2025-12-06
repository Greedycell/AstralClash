
const crypto = require('crypto')
const PiranhaMessage = require('../../PiranhaMessage')

class LoginFailedMessage extends PiranhaMessage {
  constructor (client, player, msg, errCode) {
    super()
    this.id = 20103
    this.version = 0
    this.client = client
    this.player = player

    this.msg = msg
    this.errCode = errCode

    this.m_compressedFingerprintData = crypto.randomBytes(64);
  }

  // After login
  // 7  = Content Update
  // 8  = Update available
  // 10 = Maintenance
  // 11 = Banned
  // 12 = Played too long

  // Before login
  // 8  = Maintenance
  // 9  = Banned
  // 10 = Update available

  encode () {
    this.writeInt(this.errCode)
    this.writeString() // m_resourceFingerprintContent
    this.writeString() // m_redirectDomain
    this.writeString() // m_contentUrl
    this.writeString() // m_updateUrl
    this.writeString(this.msg)
    this.writeInt(0) // m_endMaintenanceTime
    this.writeBoolean(false) // m_bannedShowHelpshiftContact

    this.writeBytes(this.m_compressedFingerprintData, this.m_compressedFingerprintData.length)

    /*if (this.m_contentUrlList != null)
    {
        this.writeInt(this.m_contentUrlList.Size())

        for (int i = 0 i < this.m_contentUrlList.Size() i++)
        {
            this.writeString(this.m_contentUrlList[i])
        }
    }
    else
    {*/
        this.writeInt(-1)
    //}

    this.writeInt(0)
    this.writeInt(0)
    this.writeString(null)
    this.writeInt(-1)
  }
}

module.exports = LoginFailedMessage