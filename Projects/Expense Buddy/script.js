// --- THEME TOGGLE LOGIC ---
const html = document.documentElement;
const themeToggleBtn = document.getElementById("theme-toggle");

// 1. Check Local Storage or System Preference on Load
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

// 2. Toggle Button Event Listener
themeToggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
});

// --- CONFIGURATION & DOM ELEMENTS ---
const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const textInput = document.getElementById("text");
const amountInput = document.getElementById("amount");
const emptyState = document.getElementById("empty-state");

// --- STATE MANAGEMENT ---

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);
let transactions =
  localStorageTransactions !== null ? localStorageTransactions : [];

// --- LOGIC: CRUD OPERATIONS ---

function addTransaction(e) {
  e.preventDefault();

  if (textInput.value.trim() === "" || amountInput.value.trim() === "") {
    alert("Please enter a valid description and amount");
    return;
  }

  const transaction = {
    id: generateID(),
    text: textInput.value,
    amount: +amountInput.value,
  };

  transactions.push(transaction);

  addTransactionDOM(transaction);
  updateValues();
  updateLocalStorage();

  textInput.value = "";
  amountInput.value = "";
}

function generateID() {
  return Math.floor(Math.random() * 100000000);
}

// --- READ: DOM GENERATION ---
function addTransactionDOM(transaction) {
  const isIncome = transaction.amount > 0;
  const sign = isIncome ? "+" : "-";

  // CSS Classes Logic
  const iconClass = isIncome ? "income-icon" : "expense-icon";
  const textClass = isIncome ? "income-text" : "expense-text";
  const faIcon = isIncome ? "fa-arrow-up" : "fa-arrow-down";

  const item = document.createElement("li");
  item.className = "transaction-item";

  item.innerHTML = `
        <div class="item-left">
            <div class="item-icon ${iconClass}">
                <i class="fa-solid ${faIcon}"></i>
            </div>
            <div class="item-details">
                <h4>${transaction.text}</h4>
                <span class="item-date">${new Date().toLocaleDateString()}</span>
            </div>
        </div>
        <div class="item-right">
            <span class="item-amount ${textClass}">
                ${sign}₹${Math.abs(transaction.amount).toFixed(2)}
            </span>
            <button onclick="removeTransaction(${transaction.id})" 
                    class="delete-btn" 
                    title="Delete Transaction">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    `;

  list.prepend(item);
}

function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  balance.innerText = `₹${total.toFixed(2)}`;
  moneyPlus.innerText = `+₹${income.toFixed(2)}`;
  moneyMinus.innerText = `-₹${expense.toFixed(2)}`;

  checkEmptyState();
}

function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  updateLocalStorage();
  init();
}

function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function checkEmptyState() {
  if (transactions.length === 0) {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }
}

// --- DATA TOOLS ---

function exportToCSV() {
  if (transactions.length === 0) {
    alert("No data to export!");
    return;
  }
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "ID,Description,Amount,Date\n";

  transactions.forEach(function (row) {
    let safeText = row.text.replace(/,/g, " ");
    let date = new Date().toLocaleDateString();
    let rowStr = `${row.id},${safeText},${row.amount},${date}`;
    csvContent += rowStr + "\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "my_expenses.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function clearAllData() {
  if (transactions.length === 0) return;
  if (
    confirm(
      "Are you sure you want to delete ALL transaction history? This cannot be undone."
    )
  ) {
    transactions = [];
    updateLocalStorage();
    init();
  }
}

function init() {
  list.innerHTML = "";
  list.appendChild(emptyState);

  transactions.forEach(addTransactionDOM);
  updateValues();
}

form.addEventListener("submit", addTransaction);

init();
