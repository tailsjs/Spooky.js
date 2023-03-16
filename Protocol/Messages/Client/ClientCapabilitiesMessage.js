const PiranhaMessage = require("../../PiranhaMessage");

class ClientCapabilitiesMessage extends PiranhaMessage{
    constructor(bytes, client, player){
        super(bytes)
        this.client = client;
        this.player = player;
        this.id = 10107
        this.version = 0
    }

    decode(){
        this.player.latency = this.readVInt()
    }

    process(){

    }
}

module.exports = ClientCapabilitiesMessage