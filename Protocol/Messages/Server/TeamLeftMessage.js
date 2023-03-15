const PiranhaMessage = require('../../PiranhaMessage')

class TeamLeftMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 24125
    this.client = client
    this.version = 0
  }

  async encode () {
    this.writeInt(0) // LeftReason
  }
}

module.exports = TeamLeftMessage
