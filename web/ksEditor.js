const editor = document.getElementById('ksEditor');
const output = document.getElementById('output');

document.getElementById('runBtn').addEventListener('click', () => {
    const code = editor.value;
    output.textContent = '';

    // Simple "KS simulation" in browser: show code as executed
    try {
        // For security, only simulate execution
        const lines = code.split('\n');
        lines.forEach((line, index) => {
            output.textContent += `[Line ${index+1}] ${line}\n`;
        });
        output.textContent += "\n[KS Execution simulated in browser]";
    } catch (err) {
        output.textContent += `Error: ${err.message}`;
    }
});

document.getElementById('downloadBtn').addEventListener('click', () => {
    const blob = new Blob([editor.value], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'example.ks';
    link.click();
});
