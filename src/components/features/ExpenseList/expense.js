import React from 'react';
import "./style.css"


const Expense = ({expense,getEditData}) => {
  const editHandler = () => {
    console.log(expense);
    getEditData(expense);
  }
    const day = expense.date.slice(8)
    const month = new Date(expense.date).getMonth() + 1;
    const year = new Date(expense.date).getFullYear();
    console.log(month,year,day)
    const {title,price} = expense


  return (
    <li  className='newlist'>

      <div className='date'>
        <p className='day'>{day}</p>
        <p className='month'>{month}</p>
        <p className='year'>{year}</p>
      </div>

      <div className='title'>{title}</div>
      <div className='price'>${price}</div>
      <button type="button" onClick={editHandler}>Edit</button>
      <button type="button">Delete</button>
    </li>
  );
};

export default Expense;
