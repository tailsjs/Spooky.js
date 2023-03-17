const parse = require("./CSVParser")
let data = parse("./CSVParser/CSV/csv_logic/skins.csv")
let confdata = parse("./CSVParser/CSV/csv_logic/skin_confs.csv")

function getAllSkins(){
    return confdata.filter(e => e.Character != "").map(e => confdata.indexOf(e))
}


module.exports = {
    getAllSkins
}