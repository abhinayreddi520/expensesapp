import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import './firebase/firebase';
import {startSetExpense} from './actions/expenses';


const store = configureStore();
const jsx = (
    <Provider store ={store}>
        <AppRouter/>
    </Provider> 
    
);
ReactDOM.render(<p>loading...</p>,document.getElementById('app'));
store.dispatch(startSetExpense()).then(()=>{
ReactDOM.render(jsx,document.getElementById('app'));
});





