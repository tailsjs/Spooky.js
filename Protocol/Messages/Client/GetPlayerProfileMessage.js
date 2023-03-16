const PiranhaMessage = require('../../PiranhaMessage')
const PlayerProfileMessage = require('../Server/PlayerProfileMessage')

class GetPlayerProfileMessage extends PiranhaMessage {
  constructor (bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 14113
    this.version = 0
  }

  async decode () {
    this.lowID = this.readLong()[1]
  }

  async process () {
    await new PlayerProfileMessage(this.client, this.player, this.lowID).send()
  }
}

module.exports = GetPlayerProfileMessage
