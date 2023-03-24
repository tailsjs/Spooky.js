const LogicChangeAvatarNameCommand = require("../../Commands/Server/LogicChangeAvatarNameCommand");
const PiranhaMessage = require("../../PiranhaMessage");

class ChangeAvatarNameMessage extends PiranhaMessage{
    constructor(bytes, client, player){
        super(bytes)
        this.client = client;
        this.player = player;
        this.id = 10212
        this.version = 0
    }

    decode(){
        this.name = this.readString()
        this.readBoolean()
    }

    process(){
        if(this.name.length < 3 || this.name.length > 20)return;

        this.player.name = this.name
        this.player.tutorialState = 2

        new LogicChangeAvatarNameCommand(this.client, this.name).send()
    }
}

module.exports = ChangeAvatarNameMessage