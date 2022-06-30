import React, { useState, useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import "./Graph.css"
import Pie from "./Pie"
import HeatMap from "./HeatMap"
import Gauge from "./Gauge"
import SingleStat from "./SingleStat"
import Point from './Point'
import LCD from './Lcd'
import Bar from './Bar'
import StackedBar from './StackedBar';
import Line from './Line'
import Discrete from './Discrete'
import * as echarts from 'echarts';

import Table from './Table';
import Export from './Export'






const Graph = (props) => {

  console.log("props", props)


  return (
    // <div ref={inputRef}>
    <div>
      <Export></Export>
      <div className="flex-container-point">
        <Point date={props}></Point>
      </div>
      <div className="flex-container">
        <div>
          <HeatMap></HeatMap>
        </div>



        <div>
          <Bar></Bar>
        </div>

        <div>
          <StackedBar></StackedBar>
        </div>
      </div>

      <div className="flex-container">
        <div>
          <Line></Line>
        </div>

        <div>
          <SingleStat></SingleStat>
        </div>

        <div>
          <Gauge></Gauge>
        </div>

        <div>
          <Pie></Pie>
        </div>
      </div>

      <div className="flex-container" >
        <div>
          <Discrete></Discrete>
        </div>

        <div>
          <LCD></LCD>
        </div>


      </div>


      <div className="flex-container">
        <div>
          <p className='center'>Chip Perso TImes By D_MarchID</p>
          <Table></Table>
        </div>
      </div>

    </div>
  );

}

export default Graph;
