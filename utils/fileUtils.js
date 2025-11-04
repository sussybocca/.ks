const fs = require('fs');
const path = require('path');

module.exports = {
    exists: (filePath) => fs.existsSync(filePath),
    delete: (filePath) => fs.unlinkSync(filePath),
    rename: (oldPath, newPath) => fs.renameSync(oldPath, newPath)
};
