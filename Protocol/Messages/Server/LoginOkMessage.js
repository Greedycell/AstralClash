const PiranhaMessage = require('../../PiranhaMessage')

class LoginOkMessage extends PiranhaMessage {
  constructor (client, player) {
    super()
    this.id = 20104
    this.client = client
    this.player = player
    this.version = 0
  }

  encode () {
    this.writeLong(this.client.player.highID, this.client.player.lowID)
    this.writeLong(this.client.player.highID, this.client.player.lowID)
    this.writeString(this.client.player.token)
    this.writeString() // m_facebookId
    this.writeString() // m_gamecenterId
    this.writeInt() // m_serverMajorVersion
    this.writeInt() // m_serverBuildVersion
    this.writeInt() // m_serverBuildVersion
    this.writeString("prod")
    this.writeInt(0) // m_sessionCount
    this.writeInt(0) // m_playTimeSeconds
    this.writeInt() // m_daysSinceStartedPlaying
    this.writeString() // m_facebookAppId
    this.writeString() // m_serverTime
    this.writeString() // m_accountCreatedDate
    this.writeInt(0) // m_startupCooldownSeconds
    this.writeString() // m_googleServiceId
    this.writeString() // m_region
    this.writeString(null)
    this.writeInt(1)
    this.writeString(null)
    this.writeString(null)
    this.writeString(null)

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

    /*if (this.m_chronosContentUrlList != null)
    {
        this.writeInt(this.m_chronosContentUrlList.Size())

        for (int i = 0 i < this.m_chronosContentUrlList.Size() i++)
        {
            this.writeString(this.m_chronosContentUrlList[i])
        }
    }
    else
    {*/
        this.writeInt(-1)
    //}
  }
}

module.exports = LoginOkMessage