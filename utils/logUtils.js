const vscode = require('vscode');

module.exports = {
    info: (msg) => vscode.window.showInformationMessage(msg),
    error: (msg) => vscode.window.showErrorMessage(msg),
    warn: (msg) => vscode.window.showWarningMessage(msg)
};
