const PiranhaMessage = require("../../PiranhaMessage");

class LogicSetPlayerNameColorCommand extends PiranhaMessage{
    constructor(bytes, client, player){
        super(bytes)
        this.client = client;
        this.player = player;
        this.commandID = 527
        this.version = 0
    }

    decode(self){
        this.nameColor = self.readDataReference()[1]
    }

    async process(){
        this.player.nameColor = this.nameColor
    }
}

module.exports = LogicSetPlayerNameColorCommand