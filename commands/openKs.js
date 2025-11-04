const vscode = require('vscode');
const fs = require('fs');

module.exports = function openKs() {
    const options = {
        canSelectMany: false,
        openLabel: 'Open KS file',
        filters: { 'KS Files': ['ks'] }
    };
    vscode.window.showOpenDialog(options).then(fileUri => {
        if (fileUri && fileUri[0]) {
            vscode.window.showTextDocument(fileUri[0]);
            vscode.window.showInformationMessage(`Opened ${fileUri[0].fsPath}`);
        }
    });
};
