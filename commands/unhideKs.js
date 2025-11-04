const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

module.exports = function unhideKs() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return vscode.window.showErrorMessage('No KS file open');

    const filePath = editor.document.uri.fsPath;
    if (!filePath.endsWith('.hidden')) {
        return vscode.window.showWarningMessage('File is not hidden');
    }

    const unhiddenPath = filePath.replace(/\.hidden$/, '');
    fs.rename(filePath, unhiddenPath, (err) => {
        if (err) return vscode.window.showErrorMessage(`Failed to unhide file: ${err.message}`);
        vscode.window.showInformationMessage(`KS file unhidden: ${unhiddenPath}`);
    });
};
