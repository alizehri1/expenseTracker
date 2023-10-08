import React from 'react';
import { useState } from 'react';
import './style.css';

const ExpenseForm = ({ onExpenseAdd }) => {
  // const [expenseTitle, setExpenseTitle] = useState("");
  // const [expensePrice, setExpensePrice] = useState("");
  // const [expenseDate, setExpenseDate] = useState("");

  const [expenseData, setExpenseData] = useState({
    title: '',
    price: '',
    date: '',
  });

  const onChangeTitleHandler = (e) => {
    // setExpenseTitle(e.target.value)
    console.log(e.target.name, e.target.value);
    setExpenseData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };
  const onChangePriceHandler = (e) => {
    // setExpensePrice(e.target.value)
    setExpenseData((prevstate) => ({ ...prevstate, price: e.target.value }));
  };
  const onChangeDateHandler = (e) => {
    // setExpenseDate(e.target.value)
    setExpenseData((prevstate) => ({ ...prevstate, date: e.target.value }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onExpenseAdd(expenseData);
    // console.log(expenseData);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h1>Enter Complete details</h1>
      <div className='form'>
      
      <div>
        {/* <label htmlFor='expenseTitle'>Title</label> <br /> */}
        <input
          className='input'
          type='text'
          name='title'
          id='expenseTitle'
          placeholder='Enter Title'
          value={expenseData.title}
          onChange={onChangeTitleHandler}
        />
      </div>
      <div>
        {/* <label htmlFor='expensePrice'>Price</label> <br /> */}
        <input
          className='input'
          type='number'
          name='price'
          id='expensePrice'
          placeholder='Enter Price'
          value={expenseData.price}
          onChange={onChangePriceHandler}
        />
      </div>
      <div>
        {/* <label htmlFor='expenseDate'>Date</label> <br /> */}
        <input
          className='input'
          type='date'
          name='date'
          id='expensedate'
          placeholder='Enter date'

          value={expenseData.date}
          onChange={onChangeDateHandler}
        />
      </div>
      <div>
        <button className='submit'>Submit</button>
      </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
