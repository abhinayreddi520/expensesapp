import {BrowserRouter, Route,Switch} from 'react-router-dom';
import React from 'react';
import ExpenseDashboard from './../components/ExpenseDashboard';
import AddExpenseDashboard from './../components/AddExpenseDashboard';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/HelpPage';
import PageNotFound from './../components/PageNotFound';
import Header from './../components/Header';
import {LoginPage} from '../components/loginPage';
const AppRouter = ()=>(
<BrowserRouter>
    <div>
        <Header/>
    <Switch>
    <Route path = "/" component={LoginPage} exact ={true}/>  
    <Route path="/home" component={ExpenseDashboard} />
    <Route path="/create" component={AddExpenseDashboard} />     
    <Route path="/edit/:id" component={EditExpensePage} />     
    <Route path="/help" component={HelpPage} />
    <Route  component={PageNotFound} />     
    </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;
