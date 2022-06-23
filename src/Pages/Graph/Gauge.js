import React from "react";

import ReactEcharts from "echarts-for-react";
function Gauge() {
  const option = {

    series: [
      {
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [0.3, '#FF6E76'],
              [0.7, '#FDDD60'],
              [1, '#7CFFB2']
            ]
          }
        },
        pointer: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          color: '#464646',
          fontSize: 15,
          distance: -60,
          formatter: function (value) {
            if (value === 0) {
              return '0';
            } else if (value === 30) {
              return '30';
            } else if (value === 70) {
              return '70';
            } else if (value === 100) {
              return '100';
            }
            return '';
          }
        },
        title: {
          offsetCenter: [0, '-20%'],
          fontSize: 30
        },
        detail: {
          fontSize: 30,
          offsetCenter: [0, '-10%'],
          valueAnimation: true,
          formatter: function (value) {
            return Math.round(value * 100) + '%';
          }
        },
        data: [
          {
            value: 0.2,
            name: ''
          }
        ]
      },
      {
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        itemStyle: {
          color: '#FD7347'
        },
        progress: {
          show: true,
          width: 20
        },
        pointer: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        detail: {
          show: false
        },
        data: [
          {
            value: 20
          }
        ]
      }
    ]
  };
  return <ReactEcharts option={option} />;
}
export default Gauge;

