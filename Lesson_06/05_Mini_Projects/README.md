# 💰 Personal Expense Analyzer

A JavaScript mini project for analyzing personal expenses and generating a simple spending report.

This project combines the JavaScript concepts I have learned so far and applies them in a practical program.

---

## 📌 Project Task

Create a program that analyzes a user's daily expenses.

The program should store expense data, calculate the total and average expenses, determine the user's spending level, and display a complete summary report.

---

## 📥 Input

User information:

```js
const userName = "Ayla";
```

Expense list:

```js
const expenses = [120, 50, 300, 80, 200];
```

---

## ✅ Project Requirements

The program should:

- Store the user's name and expenses.
- Calculate the total amount of expenses.
- Calculate the average expense.
- Check each expense using a loop.
- Determine the spending level based on the total expense.

### Spending Rules:

| Total Expense | Spending Level |
|---|---|
| More than 700 | High Spending |
| 400 - 700 | Medium Spending |
| Below 400 | Low Spending |

---

## 🎯 Expected Output

```text
User: Ayla

Expense 1: $120
Expense 2: $50
Expense 3: $300
Expense 4: $80
Expense 5: $200

----------------

Total Expense: $750
Average Expense: $150

Spending Level: High Spending
```

---

## 🧠 JavaScript Concepts Practiced

This project uses the main concepts I have learned so far:

### Variables
Using `let` and `const` to store values.

### Data Types
Working with:

- String
- Number

### Arrays
Storing multiple expense values in one collection.

### Loops
Using `for` loops to process each expense.

### Functions
Creating reusable functions for:

- Calculating total expenses
- Calculating average expenses
- Determining spending level

### Parameters & Arguments
Passing values into functions.

### Return Values
Returning calculated results from functions.

### Conditions
Using:

```text
if / else if / else
```

to make decisions.

### Operators

Using:

- Arithmetic Operators
- Comparison Operators

### Template Literals

Creating dynamic and readable output messages.

---

## 🔄 Program Flow

```text
Store user information and expenses
            ↓
Loop through expenses
            ↓
Calculate total expense
            ↓
Calculate average expense
            ↓
Determine spending level
            ↓
Generate final report
```

---

## 🚀 Learning Goal

The goal of this project is to practice combining different JavaScript fundamentals together in one complete program.

Instead of using each concept separately, this project shows how:

```text
Variables
Arrays
Loops
Functions
Conditions
Numbers
Strings
```

can work together to solve a real-world problem.

---

## 📁 Project Structure

```text
Personal_Expense_Analyzer/
│
├── app.js
└── README.md
```

---

## 🛠️ How to Run

Make sure Node.js is installed.

Run the project using:

```bash
node app.js
```

---

## 📌 Project Status

Completed ✅

## Technology

JavaScript