//your JS code here. If required.
// Get reference to the button element
const button = document.querySelector('input[type="button"]');

// Add click event listener to the button
button.addEventListener('click', function() {
    // Get reference to the select element
    const selectElement = document.getElementById('colorSelect');

    // Get the index of the selected option
    const selectedIndex = selectElement.selectedIndex;

    // Remove the selected option from the select element
    if (selectedIndex !== -1) {
        selectElement.remove(selectedIndex);
    }
});
