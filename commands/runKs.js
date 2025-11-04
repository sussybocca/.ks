const vscode = require('vscode');
const { spawn } = require('child_process');
const path = require('path');

module.exports = function runKs() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return vscode.window.showErrorMessage('No KS file open');

    const filePath = editor.document.uri.fsPath;

    // Spawn Python process to run KS file
    const python = spawn('python', [filePath]);

    python.stdout.on('data', data => vscode.window.showInformationMessage(data.toString()));
    python.stderr.on('data', data => vscode.window.showErrorMessage(data.toString()));
};
