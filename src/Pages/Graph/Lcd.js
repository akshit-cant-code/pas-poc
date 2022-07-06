import React from "react";
import ReactEcharts from "echarts-for-react"; 

function LCD(){
    const lcd = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: 'category',
          data: ['', '', '', '', '', ''],
        },
        series: [
          {
            name: '2021',
            type: 'bar',
            label: {
              show: true,
              position: 'right',
            },
            data: [18203, 23489, 29034, 34970, 31744, 30230],
            showBackground: true,
          },
        ]
      };
    return <ReactEcharts theme={'dark'} option={lcd} />;
}

export default LCD;