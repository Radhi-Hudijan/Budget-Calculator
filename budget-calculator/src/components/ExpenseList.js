import React from "react";
import Item from "./ExpenseItem";
import { ImBin } from "react-icons/im";
export const ExpenseList = ({ expenses }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return <Item key={expense.id} expense={expense} />;
        })}
      </ul>

      {expenses.length > 0 && (
        <button className="btn">
          {" "}
          Clear expenses <ImBin className="btn-icon" />
        </button>
      )}
    </>
  );
};
