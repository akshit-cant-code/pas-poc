import React,{ useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import "./Graph.css"
import Pie from "./Pie"
import HeatMap from "./HeatMap"
import Gauge from "./Gauge"
import SingleStat from "./SingleStat"
import Point from './Point'
import LCD from './Lcd'
import Bar from './Bar'
import StackedBar  from './StackedBar';
import Line from './Line'
import Discrete from './Discrete'
import * as echarts from 'echarts';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";






const Graph = (props) => {

  const inputRef = useRef(null);
const printGraph =()=>{
  html2canvas(inputRef.current).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF('p', 'pt', 'a4', false);
    pdf.addImage(imgData, "JPEG", 0, 0,590,990, undefined, false);
    pdf.save("Download_Graphs.pdf");
  });
}

  const table = {

  };
  
  return (
    <div ref={inputRef}>
      <h3>Graphs</h3>
      <div className="flex-container">
        <div>
          <p>Rejection code Heatmap</p>
          <HeatMap></HeatMap>
        </div>
        <div>
          <p>TotalDuration by D_MachId</p>
          <Point></Point>
        </div>
        <div>
          <p>Bar Chart</p>
          <Bar></Bar>
        </div>
        <div>
          <p>Stacked Bar Chart</p>
          <StackedBar></StackedBar>
        </div>
        <div>
          <p>Line Chart</p>
          <Line></Line>
        </div>
        <div>
          <p></p><p></p>
          <SingleStat></SingleStat>
        </div>
        <div>
          <Gauge></Gauge>
        </div>
        <div>
          <Pie></Pie>
        </div>
        <div>
          <p>Discrete Panel</p>
          <Discrete></Discrete>
        </div>
        <div>
          <p>OEE Summary by MX</p>
          <LCD></LCD>
        </div>
        <div>
          <p>Table</p>
          <ReactEcharts option={table} />
        </div>
        
      </div>
      <button className="printBtn" onClick={printGraph}>Download</button>
    </div>
  );

}

export default Graph;
