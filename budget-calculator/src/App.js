import React, { useState } from "react";
import "./App.css";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { Alert } from "./components/Alert";
import { v4 as uuidv4 } from "uuid";

const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "car payment", amount: 500 },
  { id: uuidv4(), charge: "credit card bills", amount: 1200 },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  console.log(initialExpenses);
  return (
    <>
      <Alert></Alert>
      <h1>Budget Calculator </h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>

      <h1>
        {" "}
        Total Spending :{" "}
        <span className="total">
          {" "}
          ${" "}
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
