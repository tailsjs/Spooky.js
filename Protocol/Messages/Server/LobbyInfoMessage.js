const PiranhaMessage = require('../../PiranhaMessage')

class LobbyInfoMessage extends PiranhaMessage {
  constructor (client, player) {
    super()
    this.id = 23457
    this.client = client
    this.player = player
    this.version = 0
  }

  async encode () {
    this.writeVInt(1488)
    this.writeString(`Spooky.js server.\nCurrent ping: ${this.player.latency}ms`)
    this.writeVInt(0)
  }
}

module.exports = LobbyInfoMessage
