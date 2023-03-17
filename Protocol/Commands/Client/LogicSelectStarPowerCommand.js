const PiranhaMessage = require("../../PiranhaMessage");
const TeamMessage = require("../../Messages/Server/TeamMessage")

class LogicSelectStarPowerCommand extends PiranhaMessage{
    constructor(bytes, client, player){
        super(bytes)
        this.client = client;
        this.player = player;
        this.commandID = 529
        this.version = 0
    }

    decode(self){
        this.skill = self.readDataReference()[1]
    }

    async process(){
        this.player.skills = this.skill

        if(this.player.team.inTeam){
            new TeamMessage(this.client, this.player).send()
        }
    }
}

module.exports = LogicSelectStarPowerCommand