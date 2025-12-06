//const Cards = require("../CSVParser/Cards")

class Player {
    highID = 0
    lowID = 1
    token = "Nothing"
    name = "Astral"
    coins = 100
    gems = 100
    freeGems = 100
    level = 1
    experience = 0
    league = 1
    trophies = 0
    tutorialState = 2
    nameSet = this.tutorialState == 2

    latency = 0
}

module.exports = Player