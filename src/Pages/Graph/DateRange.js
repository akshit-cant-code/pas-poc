import React from "react";
import { useState } from "react";
import {CustomProvider,DateRangePicker} from 'rsuite';
import { addDays, addHours, addMinutes, addMonths } from 'date-fns'
import Graph from "./Graph";
import "rsuite/dist/rsuite.min.css";


function DateRange() {

  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState([new Date('2022-06-30T10:30:00Z'), new Date('2022-06-30T10:35:00Z')]);
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
    <CustomProvider theme="dark">
    <div>
      <DateRangePicker defaultValue={[new Date('2022-06-30T10:30:00Z'), new Date('2022-06-30T10:35:00Z')]} format="yyyy-MM-dd HH:mm:ss" onChange={(range) => setDateRange(range)} ranges={Ranges} />
      <percentile/>
      <Graph Range={dateRange}></Graph>
    </div>
    </CustomProvider>
  );
}

export default DateRange;
