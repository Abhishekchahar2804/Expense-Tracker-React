import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [changeTitle, setTitle] = useState("");
  const [changeAmount, setAmount] = useState("");
  const [changeDate, setDate] = useState("");

  // const [userInput,setUserInput]=useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // })

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    // setUserInput((previousState)=>{
    //    return {...previousState,enteredTitle:e.target.value}
    // })
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    // setUserInput((previousState)=>{
    //     return {...previousState,enteredAmount:e.target.value}
    //  })
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    // setUserInput((previousState)=>{
    //     return {...previousState,enteredDate:e.target.value}
    //  })
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: changeTitle,
      amount: +changeAmount,
      date: new Date(changeDate),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={changeTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={changeAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={changeDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
