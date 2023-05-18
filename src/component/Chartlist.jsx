import React from "react";
import "./Chartlist.css"

const Chartlist=(props)=>{ let BarHeight="0%"
if(props.MaxPrice>0){
    // BarHeight=(props.price/props.MaxPrice*100) it give in decimal so we use round
    BarHeight=Math.round((props.price/props.MaxPrice*100))
}

    return(<>
       <div className="chart-bar">
           < div className="chart-bar_inner">
                      <div className="chart-bar_fill" style={{height:BarHeight}}></div>
              </div>

            <div className="chart-bar_label">{props.label}</div>
      </div>
    </>
    );
}
export default Chartlist;