const PiranhaMessage = require('../../PiranhaMessage')
const TeamLeftMessage = require('../Server/TeamLeftMessage')

class TeamLeaveMessage extends PiranhaMessage {
  constructor (bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 14353
    this.version = 0
  }

  async decode () {

  }

  async process () {
    this.player.team = {
        inTeam: false,
        mapID: 0
    }

    new TeamLeftMessage(this.client, this.player).send()
  }
}

module.exports = TeamLeaveMessage
