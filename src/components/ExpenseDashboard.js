import React from 'react';
import ExpenseList from './expenseList'
import ExpenseListFilters from './expenseListFilters';
import ExpenesesSummary from './expensesSummary';
const ExpenseDashboard=()=>(
    <div>
        <h1>
        <ExpenesesSummary/>
        <ExpenseListFilters/>
        <ExpenseList/>
        </h1>
    </div>
);

export default ExpenseDashboard;