import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './expenseListItem';
import selectExpenses from '../selectors/expenses';
import uuid from 'uuid';
const ExpenseList = (props)=>(
    <div>
        
           {props.expenses.length<1?<p>NO EXPENSES</p>:<h3>EXPENSES LIST</h3>} 
    
     {props.expenses.map((expense)=>{
         let id = uuid();
         return <ExpenseListItem key={id} {...expense}/> 
     })}
    </div>
);

const mapStateToProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
};
export default connect(mapStateToProps)(ExpenseList);

