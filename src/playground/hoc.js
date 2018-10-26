import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>(
   <div>
       <h1>hi hello !!!</h1>
       {props.title&&<p>{props.title}</p>}
   </div>
);
// const admin = (WrapperComponent)=>{
//  return (props)=>{
//    return  (<div>
//  <WrapperComponent {...props}/>
//  </div>);
//  }
// };
// const Admin = admin(Info);
const auth = (WrappedComponent)=>{
    return (props)=>{
    return (<div> {props.isAuth ? <WrappedComponent {...props}/>:<p>needs authentication</p>}</div>);
    }
};


const Auth = auth(Info);

ReactDOM.render(<Auth isAuth = {true} title='put your life in the hands of a computer'/>,document.getElementById('app'));