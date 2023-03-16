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
    this.writeDataReference(43, 10)

    this.writeVInt(0) // PlayedGamemodesArray

    this.writeVInt(1) // SelectedSkins
    this.writeVInt(29)
    this.writeVInt(0)

    this.writeVInt(0) // UnlockedSkins

    this.writeVInt(0)
    this.writeVInt(37500)
    this.writeVInt(0)

    this.writeBoolean(false)
    this.writeVInt(1)
    this.writeBoolean(false)

    this.writeVInt(0)
    this.writeVInt(1209599)

    this.writeVInt(0) // ForcedDrops Array
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0) // ForcedDrops Array ends!

    this.writeBoolean(true) // dear Matthew. It's a Boolean, not byte. You even use writeUInt8 (or writeByte ig) in ClassicBrawl v2.0 :skull: -- tailsjs
    this.writeBoolean(false)
    this.writeBoolean(false)
    this.writeBoolean(true) // Doublers in Shop Enabled

    this.writeVInt(1) // Something new in Resources
    this.writeVInt(1) // Unknown.
    this.writeVInt(1) // Something new in Resources

    this.writeVInt(228)
    this.writeVInt(0)

    this.writeVInt(0) // Shop. Later, ok?

    this.writeVInt(0) // AdsArray

    this.writeVInt(1488) // BattleTokens
    this.writeVInt(0)

    this.writeVInt(0)

    this.writeVInt(228) // Tickets
    this.writeVInt(0)

    this.writeDataReference(16, this.player.homeBrawler)

    this.writeString('RU')
    this.writeString('t.me/projectsurge')

    this.writeVInt(0) // IntValueArray
    this.writeVInt(0) // CooldownEntry
    this.writeVInt(0)
    this.writeVInt(0)

    this.writeVInt(2019049)
    this.writeVInt(100)
    this.writeVInt(10)

    this.writeLogicLong(30, 3)

    this.writeLogicLong(80, 10)

    this.writeLogicLong(50, 1000)

    this.writeVInt(500)
    this.writeVInt(50)
    this.writeVInt(999900)

    this.writeVInt(0) // Array

    this.writeVInt(this.player.maps.length)
    for(let map of this.player.maps){
      this.writeVInt(map.slotID)
    }
    
    this.writeVInt(this.player.maps.length)
    for(let map of this.player.maps){
      this.writeVInt(this.player.maps.indexOf(map) + 1)
      this.writeVInt(map.slotID)
      this.writeVInt(0)
      this.writeVInt(map.length) // length

      this.writeVInt(10) // tokens
      this.writeDataReference(15, map.mapID)

      this.writeVInt(5) // status

      this.writeString()

      this.writeVInt(0) // powerplay related
      this.writeVInt(0)
      this.writeVInt(0)

      this.writeBoolean(map.modifier != 0)
      if(map.modifier != 0){
        this.writeVInt(map.modifier)
      }
      
      this.writeVInt(0)
    }

    this.writeVInt(0) // Coming events array
    
    
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
    for(let i of [20, 50, 140, 280]){
      this.writeVInt(i)
    }

    this.writeVInt(4)
    for(let i of [150, 400, 1200, 2600]){
      this.writeVInt(i)
    }


    this.writeVInt(0)
    this.writeVInt(1488) // Max tokens
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

    this.writeLong(0, this.player.lowID)

    this.writeVInt(1) // NotificationFactory
    this.writeVInt(81) // NotificationID
    this.writeInt(0) // NotificattitonIndex
    this.writeBoolean(true) // isSeen
    this.writeInt(0) // Time ago was received
    this.writeString('Spooky.js started!') // Message

    this.writeVInt(1) // sentBy (0 - Tech. Support, 1 - System)

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
    this.writeVInt(0) // Small Box tokens

    this.writeDataReference(5, 8)
    this.writeVInt(666) // Coins

    this.writeDataReference(5, 9)
    this.writeVInt(0) // Big Box tokens

    this.writeDataReference(5, 10)
    this.writeVInt(777) // StarPoints

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

    this.writeVInt(0) // UnknownArray

    this.writeVInt(31)
    for(let i = 0; i < 31; i++){
      this.writeDataReference(16, i)
      this.writeVInt(1410)
    }

    this.writeVInt(31)
    for(let i = 0; i < 31; i++){
      this.writeDataReference(16, i)
      this.writeVInt(8)
    }

    this.writeVInt(0) // BrawlerSkillsSelectedArray. Later on!
    
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