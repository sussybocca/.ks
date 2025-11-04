// Simulated Android KS helpers (works with Pydroid/Termux)
const androidKS = {
    run: function(filePath) {
        console.log(`[Android] Run KS: ${filePath}`);
        // On real device, user would use Termux/Pydroid to run: python ks_engine.py <file>
    },
    open: function(filePath) {
        console.log(`[Android] Open KS: ${filePath}`);
    },
    export: function(filePath, destFolder) {
        console.log(`[Android] Export KS: ${filePath} -> ${destFolder}`);
    }
};

module.exports = androidKS;
