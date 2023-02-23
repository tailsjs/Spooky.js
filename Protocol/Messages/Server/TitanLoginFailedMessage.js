const PiranhaMessage = require('../../PiranhaMessage')

class TitanLoginFailedMessage extends PiranhaMessage {
  constructor (client, player, msg, errCode) {
    super()
    this.id = 20103
    this.version = 0
    this.client = client
    this.player = player

    this.msg = msg
    this.errCode = errCode
  }

  encode () {
    this.writeInt(this.errCode)

    this.writeString() // your finger
    this.writeString() // serverHost

    this.writeString() // patchurl
    this.writeString() // updateurl
    this.writeString(this.msg)

    this.writeInt(3600)
    this.writeBoolean(false)

    this.writeString()
    this.writeString()

    this.writeLong(0, 3)

    this.writeString()
    this.writeString()

    this.writeLong(0, 0)

    this.writeBoolean(false)
    this.writeBoolean(false)
  }
}

module.exports = TitanLoginFailedMessage
