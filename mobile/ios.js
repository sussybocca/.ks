// Simulated iOS KS helpers (works with Pythonista)
const iosKS = {
    run: function(filePath) {
        console.log(`[iOS] Run KS: ${filePath}`);
        // On real device, Pythonista can run: exec(open(filePath).read())
    },
    open: function(filePath) {
        console.log(`[iOS] Open KS: ${filePath}`);
    },
    export: function(filePath, destFolder) {
        console.log(`[iOS] Export KS: ${filePath} -> ${destFolder}`);
    }
};

module.exports = iosKS;
