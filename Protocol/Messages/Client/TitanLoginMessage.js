const PiranhaMessage = require('../../PiranhaMessage')
const TitanLoginOKMessage = require('../Server/TitanLoginOKMessage')
const TitanLoginFailedMessage = require('../Server/TitanLoginFailedMessage')
const OwnHomeDataMessage = require('../Server/OwnHomeDataMessage')

class TitanLoginMessage extends PiranhaMessage {
  constructor (bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 10101
    this.version = 0
  }

  async decode () {
    this.player.lowID = this.readLong()[1]
    this.player.token = this.readString()

    this.major = this.readInt()
    this.minor = this.readInt()
    this.build = this.readInt()
  }

  async process () {
    if (this.major != 22){
        return new TitanLoginFailedMessage(this.client, this.player, "Your version does not match the server version! Please update!", 8).send()
    }

    new TitanLoginOKMessage(this.client, this.player).send()
    new OwnHomeDataMessage(this.client, this.player).send()
  }
}

module.exports = TitanLoginMessage
