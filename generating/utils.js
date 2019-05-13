const fs = require('fs');

/**
 *
 * @param {string} fileName
 * @param {string} type = 'text' | 'json'
 */
const getDataFromFile = (fileName, type) => new Promise((resolve, reject) => {
  fs.readFile(fileName, (err, buffer) => {
    if (err) {
      reject(err);
    } else {
      resolve(
        type === 'text' ?
          buffer.toString() :
          type === 'json' ?
            JSON.parse(buffer) : null
        )
    }
  });
});


const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const getTextFromFile = (fileName) => getDataFromFile(fileName, 'text');
const getJsonFromFile = (fileName) => getDataFromFile(fileName, 'json');

const writeFile = (path, content) => {
    fs.writeFile(
      path,
      content,
      err => {
        console.error(err);
      }
  );
}


module.exports.capitalizeFirstLetter = capitalizeFirstLetter;
module.exports.getTextFromFile = getTextFromFile;
module.exports.getJsonFromFile = getJsonFromFile;
module.exports.writeFile = writeFile;
