const vscode = require('vscode');
const fs = require('fs');

module.exports = function deleteKs() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return vscode.window.showErrorMessage('No KS file open');
    
    const filePath = editor.document.uri.fsPath;
    fs.unlink(filePath, (err) => {
        if (err) return vscode.window.showErrorMessage(`Failed to delete: ${err.message}`);
        vscode.window.showInformationMessage(`Deleted ${filePath}`);
    });
};
