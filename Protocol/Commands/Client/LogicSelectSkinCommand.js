const PiranhaMessage = require("../../PiranhaMessage");
const TeamMessage = require("../../Messages/Server/TeamMessage")

class LogicSelectSkinCommand extends PiranhaMessage{
    constructor(bytes, client, player){
        super(bytes)
        this.client = client;
        this.player = player;
        this.commandID = 506
        this.version = 0
    }

    decode(self){
        this.skin = self.readDataReference()[1]
    }

    async process(){
        this.player.skin = this.skin

        if(this.player.team.inTeam){
            new TeamMessage(this.client, this.player).send()
        }
    }
}

module.exports = LogicSelectSkinCommand