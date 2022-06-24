import React from "react";
import ReactEcharts from "echarts-for-react"; 

function Bar(){
//for references : https://stackoverflow.com/questions/52771079/echarts-display-corresponding-legend-for-each-bar
    const bar = {
        color: ['#3398DB', '#5528DB', '#ff00DB', '#3300DB', '#de3423'],
        title: {
          text: 'Rejects By Machine',
          left: 'center'
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              inside: false,
              color: '#fff'
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
          }
        ],
        legend: {
          data: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6'],
          orient: "vertical",
          right: "0%",
          top: "25%"
        },
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'M1',
            type: 'bar',
            stack: 'stack',
            data: [3000, , , , , , ,]
          }, {
            name: 'M2',
            type: 'bar',
            stack: 'stack',
            data: [, 2500, , , , , ,]
          }, {
            name: 'M3',
            type: 'bar',
            stack: 'stack',
            data: [, , 2000, , , , ,]
          }, {
            name: 'M4',
            type: 'bar',
            stack: 'stack',
            data: [, , , 1500, , , ,]
          }, {
            name: 'M5',
            type: 'bar',
            stack: 'stack',
            data: [, , , , 1000, , ,]
          }, {
            name: 'M6',
            type: 'bar',
            stack: 'stack',
            data: [, , , , , 500, ,]
          }
        ]
      };
      return <ReactEcharts option={bar} />;
    
}
export default Bar;