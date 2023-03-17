class Player {
    lowID = 1
    token = "ISwearThisTokenIsGood"
    name = "Spooky.js"
    cards = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 95, 100, 105, 110, 115, 120, 125, 130, 177, 182, 194]
    homeBrawler = 0
    team = {
        inTeam: false,
        mapID: 0
    }
    skin = 0
    skills = 76
    thumbnail = 45
    nameColor = 10
    themeId = 8
    authorCode = 't.me/projectsurge'

    offers = [
        {
            name: "Spooky.js!",
            timer: 86400,
            oldCost: 1488,
            cost: 1,
            currency: 0,
            type: 0,
            purchased: false,
            includes: [
                {
                    id: 10,
                    multiplier: 1337,
                    dataRef: [0, 0]
                }
            ]
        }
    ]

    maps = [ // le tailed laziness gets in the way put it into other class :upside_down:
        {
            slotID: 1,
            mapID: 7,
            modifier: 0,
            length: 86400
        },
        {
            slotID: 2,
            mapID: 32,
            modifier: 4,
            length: 86400
        },
        {
            slotID: 3,
            mapID: 17,
            modifier: 0,
            length: 86400
        },
        {
            slotID: 4,
            mapID: 0,
            modifier: 0,
            length: 86400
        },
        {
            slotID: 5,
            mapID: 38,
            modifier: 4,
            length: 86400
        },
        {
            slotID: 6,
            mapID: 24,
            modifier: 0,
            length: 86400
        }
    ]

    latency = 0

    constructor(){
        
    }
}

module.exports = Player