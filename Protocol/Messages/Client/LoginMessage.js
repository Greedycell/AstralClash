const PiranhaMessage = require('../../PiranhaMessage')
const LoginOkMessage = require('../Server/LoginOkMessage')
const LoginFailedMessage = require('../Server/LoginFailedMessage')
const OwnHomeDataMessage = require('../Server/OwnHomeDataMessage')
const AvatarStreamMessage = require('../Server/Avatar/AvatarStreamMessage')
const OutOfSyncMessage = require('../Server/OutOfSyncMessage')
const DisconnectedMessage = require('../Server/DisconnectedMessage')
const ServerErrorMessage = require('../Server/ServerErrorMessage')

class LoginMessage extends PiranhaMessage {
  constructor (bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 10101
    this.version = 0
  }

  async decode () {
    this.highID = this.readInt()[0]
    this.lowID = this.readInt()[1]
    this.token = this.readString()
    this.majorV = this.readInt()
    this.minorV = this.readInt()
    this.build = this.readInt()
    this.resourceSHA = this.readString()
    this.uuid = this.readString()
    this.openUUID = this.readString()
    this.macAddress = this.readString()
    this.deviceModel = this.readString()
    this.preferredLanguage = this.readDataReference()
    this.preferredLanguage = this.readString()
    this.adid = this.readString()
    this.osVersion = this.readString()
    this.androidClient = this.readBoolean()
    this.imei = this.readDataReference()
    this.androidID = this.readDataReference()
    this.readString()
    this.advertisingEnabled = this.readBoolean()
    this.advertisingID = this.readString()
    this.scramblerSeed = this.readInt()
    this.appStore = this.readInt()
    this.readDataReference()
    this.readDataReference()
    this.appVersion = this.readInt()
    this.readDataReference()
    this.readDataReference()
    this.readDataReference()
    this.readDataReference()
    this.readDataReference()
    this.readInt()
  }

  async process () {
    console.log(
      `highID: ${this.highID}, ` +
      `lowID: ${this.lowID}, ` +
      `token: ${this.token}, ` +
      `major version: ${this.majorV}, ` +
      `minor version: ${this.minorV}, ` +
      `build version: ${this.build}, `
    )

    new LoginOkMessage(this.client, this.player).send()
    new OwnHomeDataMessage(this.client, this.player).send()
    new AvatarStreamMessage(this.client, this.player).send()
  }
}


module.exports = LoginMessage
