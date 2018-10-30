import React from 'react';
import ExpenseForm from './expenseForm.js';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses'
class AddExpenseDashboard extends React.Component{
  onSubmit = (expense)=>{
this.props.startAddExpense(expense);
        this.props.history.push('/');    
  };
  render(){
    return (
      <div>    
      <h1>add expense</h1>
      <ExpenseForm onSubmit={this.onSubmit}/>
      </div>
    
     );
    }
  } 
const mapStateToProps = (dispatch)=>({
  startAddExpense:(expense)=>dispatch(startAddExpense(expense))
});
export default connect(undefined,mapStateToProps)(AddExpenseDashboard);