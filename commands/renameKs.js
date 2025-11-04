const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

module.exports = function renameKs() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showErrorMessage('No KS file open');
        return;
    }
    const oldPath = editor.document.uri.fsPath;
    vscode.window.showInputBox({ prompt: 'Enter new file name' }).then(newName => {
        if (newName) {
            const newPath = path.join(path.dirname(oldPath), newName);
            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    vscode.window.showErrorMessage(`Error renaming file: ${err.message}`);
                } else {
                    vscode.window.showInformationMessage(`Renamed to ${newName}`);
                }
            });
        }
    });
};
