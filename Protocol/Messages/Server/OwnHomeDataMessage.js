const PiranhaMessage = require('../../PiranhaMessage')

class OwnHomeDataMessage extends PiranhaMessage {
  constructor (client, player) {
    super()
    this.id = 24101
    this.client = client
    this.player = player
    this.version = 0
  }

  async encode () {
    this.writeVInt(666)
    this.writeVInt(666)

    this.writeVInt(37500)
    this.writeVInt(37500)

    this.writeVInt(0)
    this.writeVInt(95)

    this.writeVInt(999999)

    this.writeDataReference(28, 45)
    this.writeDataReference(43, 0)

    this.writeVInt(0)

    this.writeVInt(1)
    this.writeVInt(29)
    this.writeVInt(0)

    this.writeVInt(0)

    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)

    this.writeBoolean(false)
    this.writeVInt(1)
    this.writeBoolean(true)

    this.writeVInt(0)
    this.writeVInt(1209599)
    this.writeVInt(0)

    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)

    this.writeBoolean(false)
    this.writeBoolean(false)
    this.writeBoolean(false)

    this.writeVInt(228)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)

    this.writeVInt(220)
    this.writeVInt(0)

    this.writeVInt(0)

    this.writeVInt(228)
    this.writeVInt(0)

    this.writeDataReference(16, this.player.homeBrawler)

    this.writeString('RU')
    this.writeString('t.me/projectsurge')

    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)

    this.writeVInt(2019049)
    this.writeVInt(100)
    this.writeVInt(10)

    this.writeVInt(30)
    this.writeVInt(3)

    this.writeVInt(80)
    this.writeVInt(10)

    this.writeVInt(50)
    this.writeVInt(1000)

    this.writeVInt(500)
    this.writeVInt(50)
    this.writeVInt(999900)

    this.writeVInt(1)
    this.writeVInt(1)

    this.writeVInt(8)
    for(let i = 0; i < 8; i++){
      this.writeVInt(i)
    }
    
    this.writeVInt(6)
    this.writeVInt(1)
    this.writeVInt(1)
    this.writeVInt(false)
    this.writeVInt(86400)
    this.writeVInt(10)
    this.writeVInt(15)
    this.writeVInt(7)
    this.writeVInt(3)
    this.writeString()
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeBoolean(false)
    this.writeVInt(0)
    this.writeVInt(2)
    this.writeVInt(2)
    this.writeVInt(false)
    this.writeVInt(86400)
    this.writeVInt(10)
    this.writeVInt(15)
    this.writeVInt(32)
    this.writeVInt(3)
    this.writeString()
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeBoolean(false)
    this.writeVInt(0)
    this.writeVInt(3)
    this.writeVInt(3)
    this.writeVInt(false)
    this.writeVInt(86400)
    this.writeVInt(10)
    this.writeVInt(15)
    this.writeVInt(17)
    this.writeVInt(3)
    this.writeString()
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeBoolean(false)
    this.writeVInt(0)
    this.writeVInt(4)
    this.writeVInt(4)
    this.writeVInt(false)
    this.writeVInt(86400)
    this.writeVInt(10)
    this.writeVInt(15)
    this.writeVInt(0)
    this.writeVInt(3)
    this.writeString()
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeBoolean(false)
    this.writeVInt(0)
    this.writeVInt(5)
    this.writeVInt(5)
    this.writeVInt(false)
    this.writeVInt(86400)
    this.writeVInt(10)
    this.writeVInt(15)
    this.writeVInt(38)
    this.writeVInt(3)
    this.writeString()
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeBoolean(false)
    this.writeVInt(0)
    this.writeVInt(6)
    this.writeVInt(6)
    this.writeVInt(false)
    this.writeVInt(86400)
    this.writeVInt(10)
    this.writeVInt(15)
    this.writeVInt(24)
    this.writeVInt(3)
    this.writeString()
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeBoolean(false)
    this.writeVInt(0)
    this.writeVInt(0)
    
    this.writeVInt(8)

    for(let i of [20, 35, 75, 140, 290, 480, 800, 1250]){
        this.writeVInt(i)
    }

    this.writeVInt(8)

    for(let i of [1, 2, 3, 4, 5, 10, 15, 20]){
        this.writeVInt(i)
    }

    this.writeVInt(3)
    
    for(let i of [10, 30, 80]){
        this.writeVInt(i)
    }

    this.writeVInt(3)
    
    for(let i of [6, 20, 60]){
        this.writeVInt(i)
    }
    this.writeVInt(4)
    this.writeVInt(20)
    this.writeVInt(50)
    this.writeVInt(140)
    this.writeVInt(280)
    this.writeVInt(4)
    this.writeVInt(150)
    this.writeVInt(400)
    this.writeVInt(1200)
    this.writeVInt(2600)

    this.writeVInt(0)

    this.writeVInt(1488)
    this.writeVInt(20)
    
    this.writeVInt(8640)
    this.writeVInt(10)
    this.writeVInt(5)
    this.writeVInt(6)
    this.writeVInt(50)
    this.writeVInt(604800)
    this.writeBoolean(true)

    this.writeVInt(0)

    this.writeVInt(1)
    this.writeLong(1, 41000008)

    this.writeInt(0)
    this.writeInt(1)

    this.writeVInt(1)
    this.writeVInt(81)
    this.writeInt(0)
    this.writeBoolean(false)
    this.writeInt(0)
    this.writeString('Spooky.js started!')
    this.writeVInt(0)

    this.writeBoolean(true)

    this.writeLogicLong(0, 0)
    this.writeLogicLong(0, this.player.lowID)
    this.writeLogicLong(0, 0)
    this.writeLogicLong(0, 0)

    this.writeString(this.player.name)
    this.writeVInt(1)

    this.writeString()

    this.writeVInt(8)

    this.writeVInt(34)
    
    for(let i of this.player.cards){
      this.writeDataReference(23, i)
      this.writeVInt(1)
    }

    this.writeDataReference(5, 1)
    this.writeVInt(0)

    this.writeDataReference(5, 8)
    this.writeVInt(666)

    this.writeDataReference(5, 9)
    this.writeVInt(0)

    this.writeDataReference(5, 10)
    this.writeVInt(777)

    this.writeVInt(31)
    for(let i = 0; i < 31; i++){
      this.writeDataReference(16, i)
      this.writeVInt(1250)
    }
    

    this.writeVInt(31)
    for(let i = 0; i < 31; i++){
      this.writeDataReference(16, i)
      this.writeVInt(1250)
    }

    this.writeVInt(0)

    this.writeVInt(31)
    for(let i = 0; i < 31; i++){
      this.writeDataReference(16, i)
      this.writeVInt(1410)
    }

    this.writeVInt(31)
    for(let i = 0; i < 31; i++){
      this.writeDataReference(16, i)
      this.writeVInt(9)
    }

    this.writeVInt(0)
    
    this.writeVInt(31)
    for(let i = 0; i < 31; i++){
      this.writeDataReference(16, i)
      this.writeVInt(0)
    }

    this.writeVInt(999)
    this.writeVInt(999)
    this.writeVInt(1)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(2)
    this.writeVInt(1585502369)
  }
}

module.exports = OwnHomeDataMessage
