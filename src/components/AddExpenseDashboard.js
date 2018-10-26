import React from 'react';
import ExpenseForm from './expenseForm.js';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses'
const AddExpenseDashboard=(props)=>(
    <div>    
    <h1>add expense</h1>
    <ExpenseForm onSubmit={(expense)=>{
    
      props.dispatch(addExpense(expense));
        props.history.push('/');    
  }}/>
    </div>
);

export default connect()(AddExpenseDashboard);