import React from "react";
import { useState } from "react";
import DateRangePicker from 'rsuite/DateRangePicker'; 
import {  isAfter } from 'date-fns'
import Graph from "./Graph";


import "rsuite/dist/rsuite.min.css";


function DateRange() {

  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState({});
    return (
      <div>Date Range
        <br></br>
      <DateRangePicker disabledDate={date => isAfter(date, new Date())} format="yyyy-MM-dd HH:mm:ss" onChange={(range) => setDateRange(range)}/>
      <Graph Range = {dateRange}></Graph>
      </div>
    );
  }

  export default DateRange;
