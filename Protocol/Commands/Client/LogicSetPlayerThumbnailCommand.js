const PiranhaMessage = require("../../PiranhaMessage");

class LogicSetPlayerThumbnailCommand extends PiranhaMessage{
    constructor(bytes, client, player){
        super(bytes)
        this.client = client;
        this.player = player;
        this.commandID = 505
        this.version = 0
    }

    decode(self){
        this.thumbnailID = self.readDataReference()[1]
    }

    async process(){
        this.player.thumbnail = this.thumbnailID
    }
}

module.exports = LogicSetPlayerThumbnailCommand