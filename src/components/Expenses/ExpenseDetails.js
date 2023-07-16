import React,{useState} from 'react';

import './ExpenseItem.css'

function ExpenseDetails(props) {
  const [title,setTitle]=useState(props.title)

  const clickHandler=()=>{
      setTitle('updated');
  }

  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseDetails;
