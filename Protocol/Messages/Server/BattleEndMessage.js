const PiranhaMessage = require('../../PiranhaMessage')

class BattleEndMessage extends PiranhaMessage {
  constructor (client, player, payload) {
    super()
    this.id = 23456
    this.client = client
    this.player = player
    this.payload = payload
    this.version = 0
  }

  async encode () {
    this.writeVInt(this.payload.battleEndType)
    this.writeVInt([2, 5].includes(this.payload.battleEndType) ? this.payload.rank - 1 : this.payload.battleResult)
    this.writeVInt(0)
    this.writeVInt(0)

    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)

    this.writeVInt(0)
    this.writeVInt(0)
    this.writeBoolean(false) // Star token
    this.writeBoolean(false) // EXP Limit is reached

    this.writeBoolean(false) // No more tokens
    this.writeBoolean(false) // TutorialBattleEnd
    this.writeBoolean(true) // MatchmakeBattleEnd
    this.writeBoolean(false) // TutorialBattleEnd???

    this.writeBoolean(false) // PowerPlayBattleEnd
    this.writeVInt(this.payload.playerList.length)

    for(let player of this.payload.playerList){
        let isPlayer = this.payload.playerList.indexOf(player) == 0
        this.writeVInt(isPlayer ? 5 : (this.payload.playerList[0].team == 0 ? (player.team == 0 ? 0 : 2) : (player.team == 0 ? 2 : 0)))
        this.writeDataReference(16, player.brawlerID)
        isPlayer ? this.writeDataReference(29, this.player.skin) : this.writeVInt(0)

        this.writeVInt(1250)
        this.writeVInt(1250)
        this.writeVInt(10)

        this.writeBoolean(isPlayer)
        if(isPlayer){
            this.writeLong(0, this.player.lowID)
        }

        this.writeString(player.name)
        this.writeVInt(100)
        this.writeVInt(28000000)
        this.writeVInt(43000000)
    }

    this.writeVInt(0)

    this.writeVInt(0)

    this.writeVInt(1)

    this.writeVInt(1)
    this.writeVInt(1250)
    this.writeVInt(1250)

    this.writeDataReference(28, 0)

    this.writeBoolean(true)
    this.writeInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeInt(0)
    this.writeInt(0)
  }
}

module.exports = BattleEndMessage
