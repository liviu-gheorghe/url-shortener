const fs = require('fs');
const path = require('path');

let entries;
const DATA_FILE_NAME = 'mockdb.csv';

const getAll = () => {
    if(entries === undefined) {
        entries = fs.readDataFromFile();
    }
    return entries;
}

const getByAlias = (alias) => {
    if(entries === undefined) {
        readDataFromFile();
    }
    return entries.filter(entry => entry.alias === alias)[0];
}

const insert = (obj) => {
    const lineToBeInserted = `\r\n${obj.origin},${obj.alias}`;
    fs.appendFileSync(path.join(__dirname, DATA_FILE_NAME),lineToBeInserted);
    if(entries === undefined) {
        entries = [obj];
    } else {
        entries = [...entries,obj];
    }
}

const readDataFromFile = () => {
    buffer = fs.readFileSync(path.join(__dirname,DATA_FILE_NAME));
    fileContent = buffer.toString();
    entries = fileContent.split('\r\n').map(
        line => {
            const entryMembers = line.split(',');
            return {
                origin: entryMembers[0],
                alias: entryMembers[1]
            }
        }
    );
}

module.exports = {
    getAll,
    getByAlias,
    insert
}