const PiranhaMessage = require('../../PiranhaMessage')

class TeamMessage extends PiranhaMessage {
  constructor (client, player) {
    super()
    this.id = 24124
    this.version = 0
    this.client = client
    this.player = player
  }

  encode () {
    if(this.player.team.inTeam){
        this.writeVInt(1)
        this.writeBoolean(false)
        this.writeVInt(10)

        this.writeLong(0, 1)

        this.writeVInt(Math.floor(Date.now() / 1000))
        this.writeBoolean(false)
        this.writeVInt(0)
        this.writeVInt(0)
        this.writeDataReference(15, this.player.team.mapID)

        this.writeVInt(1) // playerAmount

        this.writeBoolean(true) // isHost
        this.writeLong(0, this.player.lowID)

        this.writeDataReference(16, this.player.homeBrawler)
        this.writeDataReference(29, this.player.brawlers[this.player.homeBrawler].skin) // Skin

        this.writeVInt(1250)
        this.writeVInt(1250)
        this.writeVInt(9)

        this.writeVInt(3) // Status
        this.writeBoolean(false) // isReady
        this.writeVInt(0)
        this.writeVInt(0)
        this.writeVInt(2)

        this.writeString(this.player.name)
        this.writeVInt(100)
        this.writeVInt(28000000 + this.player.thumbnail)
        this.writeVInt(43000000 + this.player.nameColor)

        this.writeDataReference(23, this.player.brawlers[this.player.homeBrawler].skill) // StarPower. Later on!

        this.writeVInt(0) // InvitationArray

        this.writeVInt(0) // Array

        this.writeBoolean(false)
    }
  }
}

module.exports = TeamMessage
