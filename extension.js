const vscode = require('vscode');
const path = require('path');

// Import your command handlers
const openKs = require('./commands/openKs');
const renameKs = require('./commands/renameKs');
const exportKs = require('./commands/exportKs');
const deleteKs = require('./commands/deleteKs');
const hideKs = require('./commands/hideKs');
const unhideKs = require('./commands/unhideKs');
const runKs = require('./commands/runKs');
const checkFiles = require('./commands/checkFiles');

function activate(context) {
    console.log('KS extension is now active!');

    const commands = [
        { id: 'ks.open', callback: openKs },
        { id: 'ks.rename', callback: renameKs },
        { id: 'ks.export', callback: exportKs },
        { id: 'ks.delete', callback: deleteKs },
        { id: 'ks.hide', callback: hideKs },
        { id: 'ks.unhide', callback: unhideKs },
        { id: 'ks.run', callback: runKs },
        { id: 'ks.checkFiles', callback: checkFiles },
    ];

    for (const cmd of commands) {
        let disposable = vscode.commands.registerCommand(cmd.id, cmd.callback);
        context.subscriptions.push(disposable);
    }
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
