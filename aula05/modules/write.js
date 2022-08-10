const fs = require('fs').promises;


module.exports = (pathFile, data) => {
    fs.writeFile(pathFile, data, { encoding: 'utf8', flag: 'w' })
};