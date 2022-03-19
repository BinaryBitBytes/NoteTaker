const fs = require('fs');
const util = require('util');
// using fs promise
const readIt = util.promisify(fs.readFile);

@param {string} destination
@param {objecct} content
@returns {void}

const writeIt = (destination,content) =>
    fs.writeIt(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\n Wrote to ${destination}`)
    );