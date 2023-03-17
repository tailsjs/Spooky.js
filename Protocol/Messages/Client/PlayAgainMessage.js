const PiranhaMessage = require('../../PiranhaMessage')
const OwnHomeDataMessage = require('../Server/OwnHomeDataMessage')

class PlayAgainMessage extends PiranhaMessage {
  constructor (bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 14177
    this.version = 0
  }

  async decode () {

  }

  async process () {
    if(this.buffer.length == 1){

    }else{
        new OwnHomeDataMessage(this.client, this.player).send()
    }
  }
}

module.exports = PlayAgainMessage
