// JavaScript logic for tier list functionality
console.log('Tier list logic initialized');

document.addEventListener('DOMContentLoaded', function () {
    const resetButton = document.querySelector('.cta-button.reset');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            console.log('Reset button clicked');
        });
    }

    const exportButton = document.querySelector('.cta-button.export');
    if (exportButton) {
        exportButton.addEventListener('click', () => {
            console.log('Export button clicked');
        });
    }
});
