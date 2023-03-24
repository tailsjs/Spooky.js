const parse = require("./CSVParser")
const Characters = require("./Characters")
const Codenames = Characters.getBrawlersCodenames()
let data = parse("./CSVParser/CSV/csv_logic/skins.csv")
let confdata = parse("./CSVParser/CSV/csv_logic/skin_confs.csv")

function getAllSkins(){
    return confdata.filter(e => e.Character != "").map(e => confdata.indexOf(e))
}

function getDefaultSkins(){
    return confdata.filter(e => e.Name.endsWith("Default") && Codenames.includes(e.Character)).map(e => confdata.indexOf(e))
}


module.exports = {
    getAllSkins,
    getDefaultSkins
}