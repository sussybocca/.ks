const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

module.exports = function hideKs() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return vscode.window.showErrorMessage('No KS file open');

    const filePath = editor.document.uri.fsPath;
    const hiddenPath = filePath + '.hidden';

    fs.rename(filePath, hiddenPath, (err) => {
        if (err) return vscode.window.showErrorMessage(`Failed to hide file: ${err.message}`);
        vscode.window.showInformationMessage(`KS file hidden: ${hiddenPath}`);
    });
};
