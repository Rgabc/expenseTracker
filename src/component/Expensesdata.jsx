import React from "react";
import "./Expensesdata.css"


const Expensesdata=(props)=>{
    const date=new Date(props.dateData.date)
    console.log(props.dateData.date);
    
    // const month=["a","Jan","Feb","Mar"]; we have new method for month
    //very very important
    const month=date.toLocaleString("en-us",{month:"short"});
console.log(month)
    return(  <><div className="smallDisplay">
<div><h2 className="h2">{month}</h2>
<h3>{date.getFullYear()}</h3>
<h2 className="h2one">{date.getDate()}</h2>
</div>
</div>
</>);}
export default Expensesdata;