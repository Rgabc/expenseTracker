import React,{useState} from "react";
import axios from "axios";
import "./ExpensesForm.css"
// import Chartlist from "./Chartlist.jsx"


//useState hold my data
const ExpensesForm=(props)=>{
const [title,setTitle]=useState("");
const [amount,setAmount]=useState();
const [date,setDate]=useState();
//viewform for terenary operator
const[viewform,setviewform]=useState();
console.log(title);
console.log(amount);
console.log(date);
//by default we get e and we get e use e.prventDefault()
//  const Chartvanished=()=>{
    
//  }

     
const dataStore=(e)=>{
    
    // make object so value get store here 
    e.preventDefault();// this prevent data
    const dataObj={
     
        title:title,
        // price is previous property name and amount is input value name where amount value is store
        price:amount,
        date:new Date(date)}
    console.log(dataObj);
   
    //("") this clear the field 
    
    setTitle("");
    setAmount("");
    setDate("");
   
    setviewform(!viewform)
    axios.post("http://localhost:4020/expenses/",dataObj)
    alert("data store")
    // props.formdata(dataObj);
    window.location.reload()

}



return(<>
<div className="main">
    <div className="form">
<form   onSubmit={dataStore}  className={viewform ? "visible":"invisible"} > {/* omSubmit={dataDtore} we give because button is not sumbit form get submited and 2nd reason we use required key word for validation in input at that time validation work because we give onSubmit={dataStore to form not button} button bypass the required validation */}
    <div className="Title design">
<label  htmlFor="title">Title</label><br></br> 
<input  type="text" name="title" required="true" onChange={(e)=>setTitle(e.target.value)}  value={title}  ></input><br></br></div>
<div className="amount design">
<label htmlFor="number">Amount</label><br></br>
<input type="number" name="number"     onChange={(e)=>setAmount(e.target.value)}   value={amount} ></input><br></br></div>
<div className="date design">
<label htmlFor="date">Date</label><br></br>
<input type="date" name="date"  onChange={(e)=>setDate(e.target.value)}  value={date}></input><br></br></div>
<div className="formsubmit">
<button type="submit"  ><h3>Add Expenses</h3></button></div>
</form>
</div>
<div class="formstart">
<button  
 onClick={()=>setviewform(!viewform)}  className={viewform ? "invisible":"visible"}><h4>Add New Expenses</h4></button>
</div>
</div>

{/* <Chartlist Chartvanished={Chartvanished}/> */}
</>);

}
export default ExpensesForm;