const PiranhaMessage = require('../../PiranhaMessage')
const Skins = require('../../../CSVParser/Skins')
const Cards = require("../../../CSVParser/Cards")
const skills = Cards.getAllSkills(4)
const skins = Skins.getAllSkins()

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

    this.writeDataReference(28, this.player.thumbnail)
    this.writeDataReference(43, this.player.nameColor)

    this.writeVInt(0) // PlayedGamemodesArray

    this.writeVInt(this.player.brawlers.length) // SelectedSkins
    for (const brawler of this.player.brawlers) {
      this.writeDataReference(29, brawler.skin)
    }

    this.writeVInt(skins.length) // UnlockedSkins

    for(let skin of skins){
      this.writeDataReference(29, skin)
    }

    this.writeVInt(0)
    this.writeVInt(37500)
    this.writeVInt(0)

    this.writeBoolean(false)
    this.writeVInt(1)
    this.writeBoolean(false)

    this.writeVInt(this.player.doublers)
    this.writeVInt(1209599)

    this.writeVInt(0) 
    this.writeVInt(0) // ForcedDrops Array
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

    this.writeVInt(this.player.offers.length) // Shop.

    for(let offer of this.player.offers){
      this.writeVInt(offer.includes.length)
      for(let item of offer.includes){
        this.writeVInt(item.id)
        this.writeVInt(item.multiplier)
        this.writeDataReference(item.dataRef[0], item.dataRef[1])
        this.writeVInt(0)
      }

      this.writeVInt(offer.currency)

      this.writeVInt(offer.cost)
      this.writeVInt(offer.timer)

      this.writeVInt(1)
      this.writeVInt(100)
      this.writeBoolean(offer.purchased)

      this.writeBoolean(false)
      this.writeVInt(offer.type)
      this.writeBoolean(false)
      this.writeVInt(offer.oldCost) // OldPrice

      this.writeInt(0)
      this.writeString(offer.name)

      this.writeBoolean(false)
    }

    this.writeVInt(0) // AdsArray

    this.writeVInt(1488) // BattleTokens
    this.writeVInt(0)

    this.writeVInt(0)

    this.writeVInt(this.player.tickets) // Tickets
    this.writeVInt(0)

    this.writeDataReference(16, this.player.homeBrawler)

    this.writeString('RU')
    this.writeString(this.player.authorCode)

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
    for (const map of this.player.maps) {
      this.writeVInt(map.slotID)
    }

    this.writeVInt(this.player.maps.length)
    for (const map of this.player.maps) {
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
      if (map.modifier != 0) {
        this.writeVInt(map.modifier)
      }

      this.writeVInt(0)
    }

    this.writeVInt(0) // Coming events array

    this.writeVInt(8)
    for (const i of [20, 35, 75, 140, 290, 480, 800, 1250]) {
      this.writeVInt(i)
    }

    this.writeVInt(8)
    for (const i of [1, 2, 3, 4, 5, 10, 15, 20]) {
      this.writeVInt(i)
    }

    this.writeVInt(3)
    for (const i of [10, 30, 80]) {
      this.writeVInt(i)
    }

    this.writeVInt(3)
    for (const i of [6, 20, 60]) {
      this.writeVInt(i)
    }

    this.writeVInt(4)
    for (const i of [20, 50, 140, 280]) {
      this.writeVInt(i)
    }

    this.writeVInt(4)
    for (const i of [150, 400, 1200, 2600]) {
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
    this.writeLong(1, 41000000 + this.player.themeId)

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
    this.writeBoolean(this.player.nameSet)

    this.writeString()

    this.writeVInt(8)

    this.writeVInt(this.player.brawlers.length + 4)

    for (const brawler of this.player.brawlers) {
      this.writeDataReference(23, brawler.cardID)
      this.writeVInt(brawler.unlocked ? 1 : 0)
    }

    this.writeDataReference(5, 1)
    this.writeVInt(this.player.smallBoxTokens) // Small Box tokens

    this.writeDataReference(5, 8)
    this.writeVInt(this.player.coins) // Coins

    this.writeDataReference(5, 9)
    this.writeVInt(this.player.bigBoxTokens) // Big Box tokens

    this.writeDataReference(5, 10)
    this.writeVInt(this.player.starPoints) // StarPoints

    this.writeVInt(this.player.brawlers.length)
    for (const brawler of this.player.brawlers) {
      this.writeDataReference(16, brawler.id)
      this.writeVInt(brawler.trophies)
    }

    this.writeVInt(this.player.brawlers.length)
    for (const brawler of this.player.brawlers) {
      this.writeDataReference(16, brawler.id)
      this.writeVInt(brawler.highTrophies)
    }

    this.writeVInt(0) // UnknownArray

    this.writeVInt(this.player.brawlers.length)
    for (const brawler of this.player.brawlers) {
      this.writeDataReference(16, brawler.id)
      this.writeVInt(brawler.points)
    }

    this.writeVInt(this.player.brawlers.length)
    for (const brawler of this.player.brawlers) {
      this.writeDataReference(16, brawler.id)
      this.writeVInt(brawler.level)
    }

    this.writeVInt(skills.length)
    for(let skill of skills){
      this.writeDataReference(23, skill)
      this.writeVInt(this.player.brawlers[this.player.homeBrawler].skill == skill ? 2 : 1)
    }

    this.writeVInt(this.player.brawlers.length)
    for (const brawler of this.player.brawlers) {
      this.writeDataReference(16, brawler.id)
      this.writeVInt(brawler.new ? 1 : 0)
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
    this.writeVInt(this.player.tutorialState)
    this.writeVInt(1585502369)
  }
}

module.exports = OwnHomeDataMessage
