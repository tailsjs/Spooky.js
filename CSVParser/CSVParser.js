const { parse } = require('csv-parse/sync')
const fs = require('fs')

function CSVParse(filename){
    let input = fs.readFileSync(filename)
    const records = parse(input, {
        columns: true,
        skip_empty_lines: true
    });
    return records.slice(1)
}

module.exports = CSVParse