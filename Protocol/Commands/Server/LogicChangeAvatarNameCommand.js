const PiranhaMessage = require('../../PiranhaMessage')

class LogicChangeAvatarNameCommand extends PiranhaMessage {
  constructor (client, name) {
    super()
    this.id = 24111
    this.client = client
    this.version = 0
    this.name = name
  }

  async encode () {
    this.writeVInt(201)

    this.writeString(this.name)
    this.writeVInt(0)
  }
}

module.exports = LogicChangeAvatarNameCommand
