const PiranhaMessage = require("../../PiranhaMessage");
const TeamMessage = require("../../Messages/Server/TeamMessage")

class LogicSelectCharacterCommand extends PiranhaMessage{
    constructor(bytes, client, player){
        super(bytes)
        this.client = client;
        this.player = player;
        this.commandID = 525
        this.version = 0
    }

    decode(self){
        this.brawlerID = self.readDataReference()[1]
    }

    async process(){
        this.player.homeBrawler = this.brawlerID

        if(this.player.team.inTeam){
            new TeamMessage(this.client, this.player).send()
        }
    }
}

module.exports = LogicSelectCharacterCommand