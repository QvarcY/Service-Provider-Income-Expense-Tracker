// confirmRow.js
function confirmRow(button) {
    const row = button.parentNode.parentNode;
    const inputs = row.querySelectorAll('input');
    inputs.forEach((input) => {
        input.disabled = true;
    });
    const editButton = row.querySelector('[onclick="editRow(this)"]');
    if (editButton) {
        editButton.disabled = false;
    }
}