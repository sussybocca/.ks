const openKs = require('./openKs');
const renameKs = require('./renameKs');
const exportKs = require('./exportKs');
const deleteKs = require('./deleteKs');
const hideKs = require('./hideKs');
const unhideKs = require('./unhideKs');
const runKs = require('./runKs');
const checkFiles = require('./checkFiles');

const testFile = '../examples/example1.ks'; // relative to commands folder

console.log('--- Testing KS Commands ---');

openKs(testFile);
renameKs(testFile, 'example1_renamed.ks');
exportKs(testFile, '../examples/exported/');
deleteKs(testFile);
hideKs(testFile);
unhideKs(testFile + '.hidden');
runKs(testFile);
checkFiles(testFile);

console.log('--- Tests Completed ---');
