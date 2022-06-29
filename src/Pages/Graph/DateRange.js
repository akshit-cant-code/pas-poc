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
    },
    {
      label: 'last 3 hour',
      value: [new Date(), addHours(new Date(), -3)],
      closeOverlay: true
    },
    {
      label: 'last 6 hour',
      value: [new Date(), addHours(new Date(), -6)],
      closeOverlay: true
    },
    {
      label: 'last 12 hour',
      value: [new Date(), addHours(new Date(), -12)],
      closeOverlay: true
    },
    {
      label: 'last 24 hour',
      value: [new Date(), addHours(new Date(), -24)],
      closeOverlay: true
    },
    {
      label: 'last 2 days',
      value: [addDays(new Date(), -2),new Date()],
      closeOverlay: true
    },
    {
      label: "Last 7 days",
      value: [new Date(), addDays(new Date(), -7)]
    },
    {
      label: 'last 30 days',
      value: [new Date(),addDays(new Date(), -30)]
    },
    {
      label: 'Last 90 Days',
      value: [new Date(), addDays(new Date(), -90)],
      closeOverlay: true
    },
    {
      label: 'Last 6 Months',
      value: [new Date(), addDays(new Date(), -90)],
      closeOverlay: true
    },
    {
      label: 'Last 6 Months',
      value: [new Date(), addMonths(new Date(), -6)],
      closeOverlay: true
    }
  ];
  return (
    <div>Date Range
      <br></br>
      <DateRangePicker format="yyyy-MM-dd HH:mm:ss" onChange={(range) => setDateRange(range)} ranges={Ranges} />
      <Graph Range={dateRange}></Graph>
    </div>
  );
}

export default DateRange;
