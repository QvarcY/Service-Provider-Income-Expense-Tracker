// editRow.js
function editRow(button) {
  const row = button.parentNode.parentNode;
  const inputs = row.querySelectorAll('input');
  inputs.forEach((input) => {
      input.disabled = false;
  });
  row.querySelector('[onclick="confirmRow(this)"]').disabled = false;
}