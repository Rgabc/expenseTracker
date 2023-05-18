import React, { useState } from "react";
import Expenses from "./component/Expenses"
import ExpensesForm from "./component/ExpensesForm.jsx";// ye check kro braa br hai ky ???
import  "./App.css"
const App=()=>{
    
// const dummyData=[
//     {id:12,
//         title:"New Tv",
//     price:20000,
//   date:new Date(2023,1,9)},

//               {id:15,
//                 title:"Toilet Paper",
//               price:400,
//                date:new Date(2022,2,4)},
//           {id:14,
//             title:"Car Insurance",
//           price:12500,
//          date:new Date(2020,3,2)},
// ];
// //setfinaldata act like function so we can call it also and pass the argument also 
// const [finalData,setFinalData]=useState(dummyData);

// const formdata=(dataObj)=>{
//   // we want to add this dataObj in dummy data array we use usestate to store value because we want to summon value out of
//   // the function so usestate is very important
//   console.log(dataObj);
//   // we use setfinaldata as a function call so we can pass dataObj outside as a argument
//   //setfinaldata(dummyData,dataObj);// we use this because bydefault we add dummdata also ****we use spread operator to add
//   // other object
//   setFinalData([dataObj,...dummyData]);
// }

// console.log(finalData);

    return (
<div className="box">
    <ExpensesForm 
    // formdata={formdata}
    />
{/* <Expenses dummydata={dummyData} />  we add dataObj in dummdata and store together in one variable so that value we use in map */}
<Expenses 
// dummydata={finalData} 
/>
</div>

    )
}
export default App;