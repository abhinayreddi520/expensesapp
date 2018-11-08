import {NavLink} from 'react-router-dom';
import React from 'react';

const Header=()=>(
    <header>
        <h1>
            Expensify
            </h1>
<p> <NavLink to="/"activeClassName="is-active" exact={true}>LOGIN PAGE</NavLink></p>
<p> <NavLink to="/home"activeClassName="is-active" >ExpenseDashboard</NavLink></p>
<p>  <NavLink to="/create" activeClassName="is-active">AddExpenseDashboard</NavLink></p>
<p> <NavLink to="/help" activeClassName="is-active">HelpPage</NavLink></p>

    </header>
);
export default Header;