import React from "react";
import { MdSend } from "react-icons/md";

export const ExpenseForm = () => {
  return (
    <form>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.x rent"
          />
        </div>

        <div className="form-group">
          <label htmlFor="Amount">Amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.x 100"
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {" "}
        submit
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};
