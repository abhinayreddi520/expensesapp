import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
const ExpenseListItem = ({id,description,amount,createdAt})=>{
    return (
        <div>
   <h3>description: <Link to={`/edit/${id}`}> {description} </Link> </h3>
            <p>amount:'&#8377;'{numeral(amount/100).format('$0,0.00')}</p>
            <p>createdAt:{moment(createdAt).format('Do MMMM, YYYY')}</p>
          
        </div>
    );
}; 

export default ExpenseListItem;