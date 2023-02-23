const PiranhaMessage = require('../../PiranhaMessage')

class TitanLoginOKMessage extends PiranhaMessage {
  constructor (client, player) {
    super()
    this.id = 20104
    this.client = client
    this.player = player
    this.version = 0
  }

  encode () {
    
    this.writeLong(0, this.player.lowID)
    this.writeLong(0, this.player.lowID)
    this.writeString(this.player.token)

    this.writeString()
    this.writeString()

    this.writeInt(22)
    this.writeInt(99)
    this.writeInt(1)

    this.writeString("dev")

    this.writeInt(0) 
    this.writeInt(0) 
    this.writeInt(0)

    this.writeString()  
    this.writeString() 
    this.writeString()

    this.writeInt(0)

    this.writeString()

    this.writeString("RU")
    this.writeString()

    this.writeInt(1)

    this.writeString()  
    this.writeString() 
    this.writeString()

    this.writeVInt(0)

    this.writeString()

    this.writeVInt(1)
  }
}

module.exports = TitanLoginOKMessage
