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
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";







const Graph = (props) => {


  const printGraph = () => {
    //   html2canvas(inputRef.current).then((canvas) => {
    //     const imgData = canvas.toDataURL("image/png");
    //     const pdf = new jsPDF('p', 'pt', 'a4', false);
    //     pdf.addImage(imgData, "JPEG", 0, 0,590,990, undefined, false);
    //     pdf.save("Download_Graphs.pdf");
    //   });
    // }

    // const graphEle= document.querySelectorAll("div.flex-container > div")
    const graphEle = document.querySelectorAll(".flex-container")
    const pdf = new jsPDF('l', 'pt', 'a4', false);
    console.log("graphEle", graphEle.length);

    graphEle.forEach((ele, i) => {
      html2canvas(ele).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const imgProperties = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        console.log("pdfHeight", pdfHeight, pdfWidth);
        // pdf.addImage(imgData, "JPEG", 0, 0,590,840, undefined, false);
        pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);

        const isLast = graphEle.length === i + 1;

        //   if(isLast){
        //   pdf.save("Download_Graphs.pdf")
        // } else {
        //   pdf.addPage()
        // }

        isLast ? pdf.save("Download_Graphs.pdf") : pdf.addPage()

      });
    })
  }


  const table = {

  };

  return (
    // <div ref={inputRef}>
    <div>
      <div className="flex-container">
        <h3>Graphs</h3>
        <button className="printBtn" onClick={printGraph}>Export To PDF</button>
      </div>
      <div className="flex-container">
        <div>
          <HeatMap></HeatMap>
        </div>

        <div>
          <Point></Point>
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

        <div>
          <ReactEcharts option={table} />
        </div>
      </div>


    </div>
  );

}

export default Graph;
