import React from "react";
import { useState } from "react";
import DateRangePicker from 'rsuite/DateRangePicker';
import { addDays, addHours, addMinutes, addMonths } from 'date-fns'
import Graph from "./Graph";
import "rsuite/dist/rsuite.min.css";


function DateRange() {

  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState({});
  const Ranges = [
    {
      label: 'last 5 minutes',
      value: [new Date(), addMinutes(new Date(), -5)],
      closeOverlay: true
    },
    {
      label: 'last 15 minutes',
      value: [new Date(), addMinutes(new Date(), -15)],
      closeOverlay: true
    },
    {
      label: 'last 30 minutes',
      value: [new Date(), addMinutes(new Date(), -30)],
      closeOverlay: true
    },
    {
      label: 'last 1 hour',
      value: [new Date(), addHours(new Date(), -1)],
      closeOverlay: true
    }
  ];
  return (
    <div>
      <DateRangePicker format="yyyy-MM-dd HH:mm:ss" onChange={(range) => setDateRange(range)} ranges={Ranges} />
      <Graph Range={dateRange}></Graph>
    </div>
  );
}

export default DateRange;
