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

const readItUpdateIt = (content, file) => {
    fs.readFile(file, 'utf8', (err,data) => {
        if (err) {
            console.error(err);
        } else {
            const toJSON = JSON.parse(data);
            toJSON.push(content);
            writeToFile(file, toJSON);
        }
    });
};

module.exports = {readIt, writeIt, readItUpdateIt};