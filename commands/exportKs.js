const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

module.exports = function exportKs() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return vscode.window.showErrorMessage('No KS file open');

    const filePath = editor.document.uri.fsPath;

    vscode.window.showOpenDialog({
        canSelectFolders: true,
        openLabel: 'Select Export Folder'
    }).then(folderUri => {
        if (!folderUri || folderUri.length === 0) return;

        const destFolder = folderUri[0].fsPath;
        const destPath = path.join(destFolder, path.basename(filePath));

        fs.copyFile(filePath, destPath, (err) => {
            if (err) return vscode.window.showErrorMessage(`Export failed: ${err.message}`);
            vscode.window.showInformationMessage(`KS file exported to ${destPath}`);
        });
    });
};
