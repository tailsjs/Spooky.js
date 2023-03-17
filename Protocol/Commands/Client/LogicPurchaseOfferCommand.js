const PiranhaMessage = require("../../PiranhaMessage");
const TeamMessage = require("../../Messages/Server/TeamMessage");
const OutOfSyncMessage = require("../../Messages/Server/OutOfSyncMessage");

class LogicPurchaseOfferCommand extends PiranhaMessage{
    constructor(bytes, client, player){
        super(bytes)
        this.client = client;
        this.player = player;
        this.commandID = 519
        this.version = 0
    }

    decode(self){
        this.offerIndex = self.readVInt()
    }

    async process(){
        new OutOfSyncMessage(this.client, this.player).send() // Do logic by yourself. :) -- TailedLaziness
    }
}

module.exports = LogicPurchaseOfferCommand