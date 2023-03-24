const parse = require("./CSVParser")
const data = parse("./CSVParser/CSV/csv_logic/characters.csv")

function getDefSkinById(id){
    return data[id].DefaultSkin
}

function getNameById(id){
    return data[id].Name
}

function getBrawlersCodenames(){
    return data.filter(e => e.Type == "Hero").map(e => e.Name)
}

module.exports = {
    getDefSkinById,
    getNameById,
    getBrawlersCodenames
}