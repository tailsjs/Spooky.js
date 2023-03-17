const PiranhaMessage = require("../../PiranhaMessage");
const BattleEndMessage = require("../Server/BattleEndMessage");

class AskForBattleEndMessage extends PiranhaMessage{
    constructor(bytes, client, player){
        super(bytes)
        this.client = client;
        this.player = player;
        this.id = 14110
        this.version = 0
    }

    decode(){
        this.battleResult = this.readVInt()
        this.readVInt()
        this.rank = this.readVInt()
        this.mapID = this.readDataReference()[1]

        this.playersAmount = this.readVInt()

        this.playerList = []

        for(let i = 0; i < this.playersAmount; i++){
            let brawlerID = this.readDataReference()[1]
            let skinID = this.readDataReference()[1]
            let team = this.readVInt()
            this.readVInt()
            let name = this.readString()

            this.playerList.push({
                brawlerID,
                skinID,
                team,
                name
            })
        }
    }

    process(){
        let payload = {
            battleResult: this.battleResult,
            rank: this.rank,
            mapID: this.mapID,
            playerList: this.playerList,
            battleEndType: this.rank != 0 ? (this.playerList[1].team == this.playerList[0].team ? 5 : 2) : 0
        }

        new BattleEndMessage(this.client, this.player, payload).send()
    }
}

module.exports = AskForBattleEndMessage