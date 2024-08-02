// Get the form and table elements
const form = document.getElementById('expense-form');
const table = document.getElementById('expense-table');
const totalAmount = document.getElementById('total-amount');

// Initialize an empty array to store expenses
let expenses = [];

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the form data
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
    const expenseCategory = document.getElementById('expense-category').value;
    const expenseDate = document.getElementById('expense-date').value;

    // Create a new expense object
    const expense = {
        name: expenseName,
        amount: expenseAmount,
        category: expenseCategory,
        date: expenseDate
    };

    // Add the expense to the array
    expenses.push(expense);

    // Update the table and total amount
    updateTable();
    updateTotalAmount();

    // Clear the form fields
    form.reset();
});

// Function to update the table
function updateTable() {
    // Clear the table body
    table.tBodies[0].innerHTML = '';

    // Loop through the expenses and add rows to the table
    expenses.forEach((expense, index) => {
        const row = table.tBodies[0].insertRow();
        row.insertCell().textContent = expense.name;
        row.insertCell().textContent = `$${expense.amount.toFixed(2)}`;
        row.insertCell().textContent = expense.category;
        row.insertCell().textContent = expense.date;
        row.insertCell().innerHTML = `<button onclick="deleteExpense(${index})">Delete</button>`;
    });
}

// Function to update the total amount
function updateTotalAmount() {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    totalAmount.textContent = `$${total.toFixed(2)}`;
}

// Function to delete an expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    updateTable();
    updateTotalAmount();
}
