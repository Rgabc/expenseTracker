import React from "react";
import "./Chart.css";
import Chartlist from "./Chartlist.jsx";
// we make chart because we want month wise price data
const Chart=(props)=>{
// after loop i create this array month wise  price data/ i want to create a array month and price exist 
//main we want initial price to find out max price avg=(initial/max price )*100 but initial price is 0 
//****we will re-asign the price with filterRecord.price so when ever the filter value get by onChange the value 0get convert by filter price value than the initial value will be  example (200/max price)*100
const ChartDataPoint=[ //arrayname[0].price=400;arrayname[1].price=20;
    {label:"jan",price:0},//0index get 400
    {label:"feb",price:0},//1 index get 20 but this manual we get month in a form of index we can use [0]=>[month 0 1] it's same
    {label:"mar",price:0},
    {label:"apr",price:0},
    {label:"may",price:0},
    {label:"jun",price:0},
    {label:"jul",price:0},
    {label:"aug",price:0},
    {label:"sep",price:0},
    {label:"oct",price:0},
    {label:"nov",price:0},
    {label:"dec",price:0}
]
console.log(ChartDataPoint)
console.log(props.filterRecord)
    //we connect filterRecord and chart because our chart get shown by filterRecord data month price all data is  in filterRecord
    // console.log(props.filterRecord);
// we use for of loop to store & ptint 1 by 1 value
for(let record of props.filterRecord){// we get index number in for of loop
    const newDate=new Date(record.date)
    let Month=newDate.getMonth();
ChartDataPoint[Month].price=record.price
    console.log(Month);// we get in index number we want actual jan feb type  we want month wise price data
}
// create variable for storing price data is in array we use map print 1 by 1 and store in variable
//single line arrow function
let pricearray= props.filterRecord.map(row=>row.price);
console.log(pricearray);//data store in array[2000,400 1250 if all is there othewise => this value change as per the filter ]
//new method Math.max() give us maximum value 
//let MaxPrice=Math.max(pricearray)// it's showing Nan  because its in array[2000,14000] we need to use spread
//spread operator
let MaxPrice=Math.max(...pricearray)
console.log(MaxPrice)
//we use map on chartdatapoint arrya and map do inside the return because we want to show 12 bar as per month
//chartbarpoint as 12 data + month +price this 3 value we also want to show in bar
// in html we want to write javascript we write inside the curly bracket<>{javascript}</>
    return(<>
    <div className="chartBackground">
    {ChartDataPoint.map((row)=>{
        // we want to send month+price+maxprice in chartlist so it can show dynamic value AS per change
        return(<Chartlist label={row.label} price={row.price} MaxPrice={MaxPrice} />);
    })}
    
    </div>
    </>
    );
}
export default Chart;