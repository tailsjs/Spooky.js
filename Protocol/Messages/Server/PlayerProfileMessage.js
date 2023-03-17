const PiranhaMessage = require('../../PiranhaMessage')

class PlayerProfileMessage extends PiranhaMessage {
  constructor (client, player, lowID) {
    super()
    this.id = 24113
    this.client = client
    this.player = player
    this.version = 0

    this.lowID = lowID
  }

  async encode () {
    this.writeLogicLong(0, this.lowID)
    this.writeVInt(0)

    this.writeVInt(31)

    for(let i = 0; i < 31; i++){
        this.writeDataReference(16, i)
        this.writeVInt(0)
        this.writeVInt(1250)
        this.writeVInt(1250)
        this.writeVInt(8)
    }

    this.writeVInt(14)

    this.writeLogicLong(1, 9999) // 3vs3 wins
    this.writeLogicLong(2, 9999) // exp
    this.writeLogicLong(3, 37500) // trophies
    this.writeLogicLong(4, 37500) // hightrophies
    this.writeLogicLong(5, 30) // brawlersAmount
    this.writeLogicLong(6, 1)
    this.writeLogicLong(7, 1)  // Something.
    this.writeLogicLong(8, 9999) // Solo wins
    this.writeLogicLong(9, 9999) // RoboRumble time
    this.writeLogicLong(10, 9999) // BigBrawler time
    this.writeLogicLong(11, 9999) // Duo wins
    this.writeLogicLong(12, 21) // Passed level BossFight
    this.writeLogicLong(13, 9999)
    this.writeLogicLong(14, 1) // Best place in power play
    

    this.writeString(this.player.name)
    this.writeVInt(100)
    this.writeVInt(28000000 + this.player.thumbnail)
    this.writeVInt(43000000 + this.player.nameColor)

    this.writeBoolean(false) // alliance
  }
}

module.exports = PlayerProfileMessage
