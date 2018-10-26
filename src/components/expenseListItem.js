import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
const ExpenseListItem = ({id,description,amount,createdAt})=>{
    return (
        <div>
   <h3>description: <Link to={`/edit/${id}`}> {description} </Link> </h3>
            <p>amount:{amount}</p>
            <p>createdAt:{createdAt}</p>
          
        </div>
    );
}; 

export default connect()(ExpenseListItem);