const PiranhaMessage = require('../../PiranhaMessage')
const TeamMessage = require('../Server/TeamMessage')

class TeamCreateMessage extends PiranhaMessage {
  constructor (bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 14350
    this.version = 0
  }

  async decode () {
    this.slot = this.readVInt()
  }

  async process () {
    this.player.team = {
        inTeam: true,
        mapID: this.player.maps.find(e => e.slotID == this.slot).mapID
    }

    new TeamMessage(this.client, this.player).send()
  }
}

module.exports = TeamCreateMessage
