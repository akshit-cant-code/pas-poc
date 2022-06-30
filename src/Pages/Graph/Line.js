import React from 'react';
import ReactEcharts from 'echarts-for-react';

function Line(){
    const line = {
        title: {
          text: 'Production Progress -All',
          left: 'center',
          textStyle: {
            color: 'white'
            }
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
    
          axisLine: {
            lineStyle: {
              type: "solid",
              width: 5,
              color: 'green'
            },
            onZero: true
          },
          axisLabel: {
            color: "white"
          },
          onZero: true
        }],
        yAxis: {
          min: 0,
          type: 'value',
          axisLabel:{
            color:"white"
          }
        },
        series: [
    
          {
            type: 'line',
            showSymbol: false,
            smooth: true,
            color: "yellow",
            width: 5,
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false },
              data: [
                { xAxis: 0 },
                { xAxis: 5000 },
                { xAxis: 7500 },
                { xAxis: 1000 },
    
              ],
              lineStyle: {
                type: 'solid',
                color: 'black'
              }
            },
            data: [0, 5000, 7500, 1000],
    
          }
        ]
    
      };
    
    return <ReactEcharts option={line}/>
}

export default Line;