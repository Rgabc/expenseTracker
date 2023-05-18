import React, { useState } from "react";
import "./Filter.css"
const Filter=(props)=>{
    const[filtervalue,setfiltervalue]=useState("All")
    console.log(filtervalue);
    // we create this so we can take value from html using omClick
    const filterYear=(e)=>{
        console.log(e.target.value);
        //we can call it as a function so we can pass parameter also 
        setfiltervalue(e.target.value);
    }
  props.filterdata(filtervalue);

    return(<> <div className="infoFilter"><h5>filter by Years</h5></div>
    
    <select  className="FilterButton" onChange={filterYear}>
        <option value="All">All</option>
<option value="2021">2021</option>
<option value="2022">2022</option>
<option value="2023">2023</option>
<option value="2024">2024</option>
<option value="2025">2025</option>
    </select> 

    </>);
}
export default Filter;