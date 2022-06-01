const fs = require('fs');
const util = require('util');
// using fs promise
const readIt = util.promisify(fs.readFile);
/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeIt = (destination,content) =>
    fs.writeIt(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\n Wrote to ${destination}`)
    );

    /**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */

const readItUpdateIt = (content, file) => {
    fs.readFile(file, 'utf8', (err,data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};

module.exports = {readIt, writeIt, readItUpdateIt};