import React from 'react';
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




const Graph = () => {
  
  const table = {

  };
  
  return (
    <div>
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
    </div>
  );

}

export default Graph;
