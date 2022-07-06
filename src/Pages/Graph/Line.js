import React from 'react';
import ReactEcharts from 'echarts-for-react';


function Line(){
    const line = {
        title: {
          text: 'Production Progress -All',
          left: 'center'
        },
        xAxis: [{
         type: "category",
          data: [ '10/4','10/7','10/10','10/13','10/16','10/19','10/22','10/25','10/28'],
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
          type: 'value'
        },
        series: [
    
          {
            type: 'line',
            showSymbol: false,
            smooth: true,
            color: "yellow",
            width: 5,
            lineStyle:{

              width:6

            },
          
            data: [0, 1000,1000,1000,2000, 3000, 5000,5000,5200,7000,7200],
    
          }
        ]
    
      };
    
    return <ReactEcharts theme={'dark'} option={line}/>
}

export default Line;