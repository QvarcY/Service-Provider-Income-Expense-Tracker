// add.js
function addRow() {
  const idCounter = document.getElementById('idCounter').value; // Get idCounter value from index.html
  const tableBody = document.querySelector('tbody');
  const newRow = document.createElement('tr');
  const newRowId = parseInt(idCounter) + 1; // Unique ID for each new row

  document.getElementById('idCounter').value = newRowId; // Update idCounter value

  newRow.setAttribute('data-id', newRowId);

  newRow.innerHTML = `
      <td>${newRowId}</td>
      <td><input type="date" name="date"></td>
      <td><input type="text" name="transaction"></td>
      <td><input type="number" name="income" onchange="calculateTotal()"></td>
      <td><input type="number" name="expense" onchange="calculateTotal()"></td>
      <td>
          <button onclick="confirmRow(this)">Confirm</button>
          <button onclick="editRow(this)">Edit</button>
      </td>
  `;

  tableBody.appendChild(newRow);
}
