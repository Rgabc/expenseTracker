import React, { useEffect, useState } from "react";
import "./Expenses.css"
import Expensesdata from "./Expensesdata";
import Filter from "./Filter.jsx";
import Chart from "./Chart";
import axios from "axios"


const Expenses=(props)=>{
    console.log(props)
    const[data,setData]=useState([])
    const[FilterYear,setFilterYear]=useState()
    console.log(FilterYear);
useEffect(()=>{
axios.get("http://localhost:4020/expenses/")
.then(async(res)=>{
   const userData= await res.data;
   setData(userData)
})
.catch((err)=>{
    console.log(err)
})

},[])
console.log(data)
// let datee= new Date()
// console.log(datee)

const filterdata=(filtervalue)=>{
    console.log(filtervalue);
    setFilterYear(filtervalue);

}
// // we store this filter fnc in variable and replace the old map variable with this new variable name map filter combo attack
//   // but old record should be bydefault but now its blank because no data in particular year
let filterRecord = data.filter((row)=>{
    const newDate=new Date(row.date)
    console.log(newDate.getFullYear())
    // switch(FilterYear){
    //     case "2020":return(row.date.getFullYear()==FilterYear);
    //     break;
    //     case "2022":return(row.date.getFullYear()==FilterYear);
    //     break;
    //     case "2023":return(row.date.getFullYear()==FilterYear);
    //     break;
    //     case "All": return(row);
    //     case "2025":return(<p>herllo</p>);    
    //   }

        if(FilterYear=="All"){

            return(row); 
        }
    //     if(row.length==0||row==undefined){return(console.log("nooo"))
        
    //    }
       
        else{
            return( newDate.getFullYear()==FilterYear
        )
        }
       
})



    return(
    <> 
 <div className="middlebox" >
       <Filter filterdata={filterdata}/>
       <Chart filterRecord={filterRecord}/>
      
    {/* this is map method i forgot return() so no html get showned**||**so use return() it will return html map 
    give dynamic data */}
    {

        //arrayName.map(()=>{})
        filterRecord.reverse().map((row)=>{ 
        console.log(row);
        
        return( <>
        
       
        {/* mistakenly i write expensedata instead of expensesdate */}
     
         <Expensesdata dateData={row}/>

        <div className="bgcolor">
  
    <div className="title">
<h1>{row.title}</h1>
</div>
<div class="buttonPrice" type="submit">&#8377; {row.price}</div>
</div></>);})
}</div>
</>
    );

}
export default Expenses;
// this was the jugad method 
 {/* <div className="bgcolor">
    <div className="smallDisplay">
<div><h2 className="h2">{month[dummydata[0].date.getMonth()]}</h2>
<h3>{dummydata[0].date.getFullYear()}</h3>
<h2 className="h2one">{dummydata[0].date.getMonth()}</h2>
</div>
</div>
    <div className="title">
<h1>{dummydata[0].title}</h1>
</div>
<button  type="submit">&#8377; 60,000</button>
</div><br></br>
<div className="bgcolor">
    <div className="smallDisplay">
<div><h2 className="h2">{month[dummydata[1].date.getMonth()]}</h2>
<h3>{dummydata[1].date.getFullYear()}</h3>
<h2 className="h2one">{dummydata[1].date.getMonth()}</h2>
</div>
</div>
    <div className="title">
<h1>{dummydata[1].title}</h1>
</div>
<button  type="submit">&#8377; 94.2</button>
</div><br></br>
<div className="bgcolor">
    <div className="smallDisplay">
<div><h2 className="h2">{month[dummydata[2].date.getMonth()]}</h2>
<h3>{dummydata[2].date.getFullYear()}</h3>
<h2 className="h2one">{dummydata[2].date.getMonth()}</h2>
</div>
</div>
    <div className="title">
<h1>{dummydata[2].title}</h1>
</div>
<button  type="submit">&#8377; 4000</button>
// </div> */}