const PiranhaMessage = require('../../PiranhaMessage')

class LobbyInfoMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 23457
    this.client = client
    this.version = 0
  }

  async encode () {
    this.writeVInt(1488)
    this.writeString("Spooky.js server.")
    this.writeVInt(0)
  }
}

module.exports = LobbyInfoMessage
