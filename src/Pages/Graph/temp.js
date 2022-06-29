
import "rsuite/dist/rsuite.min.css";
import React from "react";
import { DateRangePicker } from "rsuite";
import {addDays} from 'date-fns' ;
  
function Temp() {
    return (
        <div className="App" style={
            { 
                display: "flex", 
                alignItems: "center", 
                flexDirection: "column" 
            }}>
            <header style={
                { 
                    textAlign: "center", 
                    display: "block", 
                    marginBottom: "30px" 
                }}>
                <h3 style={{ color: "green" }}>
                    GeeksforGeeks
                </h3>
                <h5>
                    React Suite DateRangePicker Custom Shortcut Options
                </h5>
            </header>
  
            <DateRangePicker
                ranges={[
                    {
                        label: 'Today',
                        value: [new Date(), new Date()]
                    },
                    {
                        label: 'Tomorrow',
                        value: [
                            addDays(new Date(), 1), 
                            addDays(new Date(), 1)
                        ]
                    },
                    {
                        label: "Next 7 days",
                        value: [
                            addDays(new Date(), 1), 
                            addDays(new Date(), 7)
                        ]
                    }
                ]}
            />
        </div>
    );
}
  
export default Temp;