const PiranhaMessage = require('../../PiranhaMessage')

class OutOfSyncMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 24104
    this.client = client
    this.version = 0
  }

  async encode () {
    this.writeInt(1)
  }
}

module.exports = OutOfSyncMessage
