import React from 'react';
import ExpenseList from './expenseList'
import ExpenseListFilters from './expenseListFilters';
const ExpenseDashboard=()=>(
    <div>
        <h1>
        <ExpenseListFilters/>
        <ExpenseList/>
        </h1>
    </div>
);

export default ExpenseDashboard;