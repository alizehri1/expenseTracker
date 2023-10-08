import React from 'react';
import Expense from './expense';
import './style.css';

const ExpenseList = ({ expenseList, getEditData }) => {
  return (
    <div>
      {expenseList === 0 && <h3>no expense list</h3>}
      <ul className='list'>
        {expenseList &&
          expenseList.length > 0 &&
          expenseList.map((expense) => (
            <Expense
              key={expense.title}
              expense={expense}
              getEditData={getEditData}
            />
          ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
