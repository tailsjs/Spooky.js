const PiranhaMessage = require('../../PiranhaMessage')
const TeamMessage = require('../Server/TeamMessage')

class TeamSetLocationMessage extends PiranhaMessage {
  constructor (bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 14363
    this.version = 0
  }

  async decode () {
    this.mapID = this.readDataReference()[1]
  }

  async process () {
    this.player.team.mapID = this.mapID

    new TeamMessage(this.client, this.player).send()
  }
}

module.exports = TeamSetLocationMessage
