const PiranhaMessage = require("../../PiranhaMessage");

class AnalyticEventMessage extends PiranhaMessage{
    constructor(bytes, client, player){
        super(bytes)
        this.client = client;
        this.player = player;
        this.id = 10110
        this.version = 0
    }

    decode(){
        this.type = this.readString()
        this.event = this.readString()
    }

    process(){
        const event = JSON.parse(this.event)

        if(this.type = "tutorial_step" && event.step == "click_to_end" && event.step_id == "18"){
            this.player.tutorialState = 1
        }
    }
}

module.exports = AnalyticEventMessage