const expenses = [120, 50, 300, 80, 200];
const userName = "Ayla";


// Calculate total expenses
function calculateTotal(expenses) {
  let total = 0;

  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
  }

  return total;
}


// Calculate average expense
function calculateAverage(total, count) {
  return total / count;
}


// Determine spending level
function getSpendingLevel(total) {
  if (total > 700) {
    return "High Spending";
  } else if (total >= 400) {
    return "Medium Spending";
  } else {
    return "Low Spending";
  }
}


// Calculate results
const totalExpense = calculateTotal(expenses);
const averageExpense = calculateAverage(totalExpense, expenses.length);

const spendingLevel = getSpendingLevel(totalExpense);


// Display expenses
console.log(`User: ${userName}`);

for (let i = 0; i < expenses.length; i++) {
  console.log(`Expense ${i + 1}: $${expenses[i]}`);
}


console.log("----------------");


// Display final report
console.log(`Total Expense: $${totalExpense}`);
console.log(`Average Expense: $${averageExpense}`);

console.log(`Spending Level: ${spendingLevel}`);