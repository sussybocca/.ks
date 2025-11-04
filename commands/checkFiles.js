const vscode = require('vscode');
const fs = require('fs');

module.exports = function checkFiles() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return vscode.window.showErrorMessage('No KS file open');

    const filePath = editor.document.uri.fsPath;

    if (fs.existsSync(filePath)) {
        vscode.window.showInformationMessage(`KS file exists: ${filePath}`);
    } else {
        vscode.window.showErrorMessage(`KS file missing: ${filePath}`);
    }
};
