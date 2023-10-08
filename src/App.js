import React from 'react';
import ExpenseForm from './components/features/ExpenseForm';
import ExpenseList from './components/features/ExpenseList';
import DefaultLayout from './components/layout/DefaultLayout';
import './App.css';
import { useState } from 'react';

const expenses = [
  // {
  //   title: 'tech care',
  //   price: 2500,
  //   date: '2001-09-2',
  // },
  // {
  //   title: 'tech care1',
  //   price: 2500,
  //   date: '2001-01-22',
  // },
  // {
  //   title: 'tech care3',
  //   price: 2500,
  //   date: '2001-01-22',
  // },
];
const App = () => {
  const [expenseList, setExpenseList] = useState(expenses);
  const [expenseData, setExpenseData] = useState(null)

  const addExpenseListHandler = (data) => {
    setExpenseList((prevstate) => [data, ...prevstate]);
  };
  const getEditDataHandler = (data) => {
    setExpenseData(data)
  }
  return (
    <DefaultLayout>.
      <ExpenseForm onExpenseAdd={addExpenseListHandler} expenseData={expenseData}/>
      <ExpenseList expenseList={expenseList} getEditData={getEditDataHandler} />
    </DefaultLayout>
  );
};
export default App;
