const parse = require("./CSVParser")
const Characters = require("./Characters")
const data = parse("./CSVParser/CSV/csv_logic/cards.csv")


function getBrawlerSkills(skill, id){
    let characterName = Characters.getNameById(id)

    return data.filter(e => e.MetaType == String(skill) && characterName == e.Target).map(e => data.indexOf(e))
}

function getAllBrawlersSkills(skill){
    let skills = {}

    for(let i of data){
        if(i.MetaType == String(skill)){
            if(!skills[brawlers[i.Target]]){
                skills[brawlers[i.Target]] = []
            }
            skills[brawlers[i.Target]].push(data.indexOf(i))
        }
    }
    return skills
}

function getAllSkills(skill){
    return data.filter(e => e.MetaType == String(skill)).map(e => data.indexOf(e))
}

function getAllBrawlersUnlocks(){
    return data.filter(e => e.Type == "unlock").map(e => data.indexOf(e))
}

module.exports = {
    getBrawlerSkills,
    getAllBrawlersSkills,
    getAllSkills,
    getAllBrawlersUnlocks
}