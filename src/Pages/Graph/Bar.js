import React from "react";
import ReactEcharts from "echarts-for-react"; 

function Bar(){
  var i=0;
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
            show:false,
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
          data: ['Machine1', 'Machine2', 'Machine3', 'Machine4', 'Machine5', 'Machine6'],
          orient: "vertical",
          right: "0%",
          top: "25%",
          formatter: (name) => {
            var value = bar.series.filter((row) => row.name === name)[0].data;
            var val;
            value.forEach((element) => {
              val = value;
            });

            return (

              name + ' ' +

              val[i++]

            );
          }
        },
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Machine1',
            type: 'bar',
            stack: 'stack',
            data: [3400, , , , , , ,]
          }, {
            name: 'Machine2',
            type: 'bar',
            stack: 'stack',
            data: [, 2400, , , , , ,]
          }, {
            name: 'Machine3',
            type: 'bar',
            stack: 'stack',
            data: [, , 1600, , , , ,]
          }, {
            name: 'Machine4',
            type: 'bar',
            stack: 'stack',
            data: [, , , 1800, , , ,]
          }, {
            name: 'Machine5',
            type: 'bar',
            stack: 'stack',
            data: [, , , , 900, , ,]
          }, {
            name: 'Machine6',
            type: 'bar',
            stack: 'stack',
            data: [, , , , , 1000, ,]
          }
        ],
        backgroundColor:"#1E1C1B"
      };
      return <ReactEcharts theme={'dark'} option={bar} />;
    
}
export default Bar;