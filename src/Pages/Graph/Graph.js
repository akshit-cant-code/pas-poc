import React from 'react';
import ReactEcharts from 'echarts-for-react';
import "./Graph.css"
import Pie from "./Pie"
import Gauge from "./Gauge"
import SingleStat from "./SingleStat"
import * as echarts from 'echarts';

// Heatmap Data Feed section------------
const hours = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
];
const days = [
  50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1900, 1950, 2000
];
const data = [[0, 9, 50], [0, 10, 50], [0, 20, 60], [0, 3, 70], [0, 4, 80], [0, 5, 90], [0, 6, 100], [0, 7, 0], [0, 8, 0], [0, 9, 10], [0, 10, 20], [0, 11, 20], [0, 12, 40], [0, 13, 10], [0, 14, 10], [0, 15, 30], [0, 16, 40], [0, 17, 60], [0, 18, 40], [0, 19, 40], [0, 20, 30], [0, 21, 30], [0, 22, 20], [0, 23, 50], [1, 0, 70], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 50], [1, 11, 20], [1, 12, 20], [1, 13, 60], [1, 14, 90], [1, 15, 100], [1, 16, 60], [1, 17, 70], [1, 18, 80], [1, 19, 100], [1, 20, 50], [1, 21, 50], [1, 22, 70], [1, 23, 20], [2, 0, 10], [2, 1, 10], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 30], [2, 11, 20], [2, 12, 10], [2, 13, 90], [2, 14, 80], [2, 15, 10], [2, 16, 60], [2, 17, 50], [2, 18, 50], [2, 19, 50], [2, 20, 70], [2, 21, 40], [2, 22, 20], [2, 23, 40], [3, 0, 70], [3, 1, 30], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 10], [3, 9, 0], [3, 10, 50], [3, 11, 40], [3, 12, 70], [3, 13, 100], [3, 14, 100], [3, 15, 100], [3, 16, 90], [3, 17, 50], [3, 18, 50], [3, 19, 100], [3, 20, 60], [3, 21, 40], [3, 22, 40], [3, 23, 10], [4, 0, 10], [4, 1, 30], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 10], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 20], [4, 10, 40], [4, 11, 40], [4, 12, 20], [4, 13, 40], [4, 14, 40], [4, 15, 100], [4, 16, 100], [4, 17, 10], [4, 18, 80], [4, 19, 50], [4, 20, 30], [4, 21, 70], [4, 22, 30], [4, 23, 0], [5, 0, 20], [5, 1, 10], [5, 2, 0], [5, 3, 30], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 20], [5, 9, 0], [5, 10, 40], [5, 11, 10], [5, 12, 50], [5, 13, 10], [5, 14, 50], [5, 15, 70], [5, 16, 100], [5, 17, 60], [5, 18, 0], [5, 19, 50], [5, 20, 30], [5, 21, 40], [5, 22, 20], [5, 23, 0], [6, 0, 10], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 10], [6, 11, 0], [6, 12, 20], [6, 13, 10], [6, 14, 30], [6, 15, 40], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 10], [6, 21, 20], [6, 22, 20], [6, 23, 60], [12, 0, 70], [22, 1, 0], [22, 2, 0], [22, 3, 0], [22, 4, 0], [22, 5, 0], [22, 6, 0], [22, 7, 0], [22, 8, 0], [22, 9, 0], [22, 10, 50], [22, 11, 20], [22, 12, 20], [22, 13, 60], [22, 14, 90], [22, 15, 100], [22, 16, 60], [22, 17, 70], [22, 18, 80], [22, 19, 100], [22, 20, 50], [22, 21, 50], [22, 22, 70], [22, 23, 20], [24, 28, 20], [15, 29, 70], [20, 2, 50], [23, 24, 30], [23, 9, 50], [23, 13, 50], [23, 21, 60], [23, 3, 70], [23, 4, 80], [23, 5, 90], [23, 6, 100], [23, 7, 0], [23, 8, 0], [23, 9, 10], [23, 13, 20], [23, 11, 20], [23, 12, 40], [23, 13, 10], [23, 14, 10], [23, 15, 30], [23, 16, 40], [23, 17, 60], [23, 18, 40], [23, 19, 40], [23, 21, 30], [23, 21, 30], [23, 22, 20], [23, 23, 50], [20, 0, 70], [20, 10, 0], [20, 2, 0], [20, 3, 0], [20, 14, 0], [20, 18, 0], [20, 19, 0], [20, 7, 0], [20, 8, 0], [20, 9, 0], [20, 10, 50], [20, 11, 20], [20, 12, 20], [20, 13, 60], [20, 14, 90], [20, 18, 100], [20, 19, 60], [20, 17, 70], [20, 18, 80], [20, 19, 100], [20, 20, 50], [20, 21, 50], [20, 22, 70], [20, 23, 20], [24, 0, 10], [24, 10, 30], [24, 2, 0], [24, 3, 0], [24, 14, 0], [24, 18, 10], [24, 19, 0], [24, 7, 0], [24, 8, 0], [24, 9, 20], [24, 10, 40], [24, 11, 40], [24, 12, 20], [24, 13, 40], [24, 14, 40], [24, 18, 100], [24, 19, 100], [24, 17, 10], [24, 18, 80], [24, 19, 50], [24, 20, 30], [24, 21, 70], [24, 22, 30], [24, 23, 0], [28, 0, 20], [28, 10, 10], [28, 2, 0], [28, 3, 30], [28, 14, 0], [28, 18, 0], [28, 19, 0], [28, 7, 0], [28, 8, 20], [28, 9, 0], [28, 10, 40], [28, 11, 10], [28, 12, 50], [28, 13, 10], [28, 14, 50], [28, 18, 70], [28, 19, 100], [28, 17, 60], [28, 18, 0], [28, 19, 50], [28, 20, 30], [28, 21, 40], [28, 22, 20], [28, 23, 0], [29, 0, 10], [29, 10, 0], [29, 2, 0], [29, 3, 0], [29, 14, 0], [29, 18, 0], [29, 19, 0], [29, 7, 0], [29, 8, 0], [29, 9, 0], [29, 10, 10], [29, 11, 0], [29, 12, 20], [29, 13, 10], [29, 14, 30], [29, 18, 40], [29, 19, 0], [29, 17, 0], [29, 18, 0], [29, 19, 0], [29, 20, 10], [29, 21, 20], [29, 22, 20], [29, 23, 60]]
  .map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });
// end-----------

// Discrete data section ----

var disData = [];
var dataCount = 200;
var startTime = +new Date();
var categories = ['M1', 'M2', 'M3'];
var types = [
  { name: 'Paused', color: '#edd70c' },
  { name: 'Stopping', color: '#d45e15' },
  { name: 'Running', color: '#75d874' },
  { name: 'Pausing', color: '#edad0c' },
  { name: 'Idle', color: '#0c93ed' },
  { name: 'Disconnected', color: '#eb0c29' }
];
// Generate mock data
categories.forEach(function (category, index) {
  var baseTime = startTime;
  for (var i = 0; i < dataCount; i++) {
    var typeItem = types[Math.round(Math.random() * (types.length - 1))];
    var duration = Math.round(Math.random() * 10000);
    disData.push({
      name: typeItem.name,
      value: [index, baseTime, (baseTime += duration), duration],
      itemStyle: {
        normal: {
          color: typeItem.color
        }
      }
    });
    baseTime += Math.round(Math.random() * 2000);
  }
});
function renderItem(params, api) {
  var categoryIndex = api.value(0);
  var start = api.coord([api.value(1), categoryIndex]);
  var end = api.coord([api.value(2), categoryIndex]);
  var height = api.size([0, 1])[1] * 0.6;
  var rectShape = echarts.graphic.clipRectByRect(
    {
      x: start[0],
      y: start[1] - height / 2,
      width: end[0] - start[0],
      height: height
    },
    {
      x: params.coordSys.x,
      y: params.coordSys.y,
      width: params.coordSys.width,
      height: params.coordSys.height
    }
  );
  return (
    rectShape && {
      type: 'rect',
      transition: ['shape'],
      shape: rectShape,
      style: api.style()
    }
  );
}

//end

const Graph = () => {
  var series = [{
    name: 'M1',
    data: [100, 115, 165, 107, 67]
  }, {
    name: 'M2',
    data: [85, 106, 129, 161, 123]
  }, {
    name: 'M3',
    data: [67, 87, 86, 167, 157]
  }]

  var genFormatter = (series) => {
    return (param) => {
      let sum = 0;
      series.forEach(item => {
        sum += item.data[param.dataIndex];
      });
      return sum
    }
  };
  const heatMap = {

    tooltip: {
      position: "top"
    },
    title: {
      top: 10,
      left: 'center',
      text: 'Rejection Code Heatmap'
    },
    grid: {
      height: "50%",
      top: "10%"
    },
    xAxis: {
      type: "category",
      data: hours,
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: "category",
      data: days,
      splitArea: {
        show: true
      }
    },
    visualMap: {
      min: 0,
      max: 100,
      calculable: true,
      orient: "horizontal",
      left: "center",
      bottom: "15%",
      inRange: {
        color: ["#010B13", "#343C19", "#676D20", "#999D26", "#CCCE2D", "#FFFF33"]
      }
    },
    series: [
      {
        type: "heatmap",
        data: data,
      }
    ]
  };

  const table = {

  };

  const point = {
    title: {
      top: '10%',
      text: 'TotalDuration by D_MachID ',
      left: 'center'
    },
    xAxis: {
      scale: true
    },
    yAxis: {
      scale: true
    },
    grid: {
      top: '20%',
      height: '60%',
      widht: '10%',
      right: '52%'
    },
    legend: {
      icon: 'rect',
      left: '48%',
      right: '60%',
      top: '20%',
      orient: 'vertical',
      data: ['Machine1', 'Machine2', 'Machine3'],
      formatter: (name) => {
        var value = point.series.filter((row) => row.name === name)[0].data;
        var avg = 0,
          min = 1000,
          max = 0;
        var total = 0;
        var arr = [];
        value.forEach((element) => {
          if (min > element[1]) {
            min = element[1];
          }
          if (max < element[1]) {
            max = element[1];
          }
          total += element[1];
          arr.push(element[1]);
        });
        avg = total / value.length;
        return (
          name +
          '   ' +
          parseFloat(min).toFixed(1) +
          ' s' +
          '   ' +
          parseFloat(max).toFixed(1) +
          ' s' +
          '   ' +
          parseFloat(avg).toFixed(1) +
          ' s'
        );
      }
    },
    series: [
      {
        name: 'Machine1',
        type: 'scatter',
        data: [
          [172.7, 110.2],
          [153.4, 30],
          [154.4, 46.2],
          [162.0, 55.0],
          [176.5, 83.0],
          [160.0, 54.4],
          [152.0, 45.8],
          [162.1, 53.6],
          [170.0, 73.2],
          [160.2, 52.1],
          [161.3, 67.9],
          [166.4, 56.6],
          [168.9, 62.3],
          [163.8, 58.5],
          [167.6, 54.5],
          [160.0, 50.2],
          [161.3, 60.3],
          [167.6, 58.3],
          [165.1, 56.2],
          [160.0, 50.2],
          [170.0, 72.9],
          [157.5, 59.8],
          [167.6, 61.0],
          [160.7, 69.1],
          [163.2, 55.9],
          [152.4, 46.5],
          [157.5, 54.3],
          [168.3, 54.8],
          [180.3, 60.7],
          [165.5, 60.0],
          [165.0, 62.0],
          [164.5, 60.3],
          [156.0, 52.7],
          [160.0, 74.3],
          [163.0, 62.0],
          [165.7, 73.1],
          [161.0, 80.0],
          [162.0, 54.7],
          [166.0, 53.2],
          [174.0, 75.7],
          [172.7, 61.1],
          [167.6, 55.7],
          [151.1, 48.7],
          [164.5, 52.3],
          [163.5, 50.0],
          [152.0, 59.3],
          [169.0, 62.5],
          [164.0, 55.7],
          [161.2, 54.8],
          [155.0, 45.9],
          [170.0, 70.6],
          [176.2, 67.2],
          [170.0, 69.4],
          [162.5, 58.2],
          [170.3, 64.8]
        ]
      },
      {
        name: 'Machine2',
        type: 'scatter',
        data: [
          [162.8, 58.0],
          [167.0, 59.8],
          [160.0, 54.8],
          [160.0, 10.2],
          [168.9, 60.5],
          [158.2, 46.4],
          [156.0, 64.4],
          [160.0, 48.8],
          [167.1, 62.2],
          [158.0, 55.5],
          [167.6, 57.8],
          [156.0, 54.6],
          [162.1, 59.2],
          [173.4, 52.7],
          [159.8, 53.2],
          [170.5, 64.5],
          [159.2, 51.8],
          [157.5, 56.0],
          [161.3, 63.6],
          [162.6, 63.2],
          [160.0, 59.5],
          [168.9, 56.8],
          [165.1, 64.1],
          [162.6, 50.0],
          [165.1, 72.3],
          [166.4, 55.0],
          [160.0, 55.9],
          [152.4, 60.4],
          [170.2, 69.1],
          [162.6, 84.5],
          [170.2, 55.9],
          [158.8, 55.5],
          [172.7, 69.5],
          [167.6, 76.4],
          [162.6, 61.4],
          [167.6, 65.9],
          [156.2, 58.6],
          [175.2, 66.8],
          [172.1, 56.6],
          [162.6, 58.6],
          [160.0, 55.9],
          [165.1, 59.1],
          [182.9, 81.8],
          [166.4, 70.7],
          [165.1, 56.8],
          [177.8, 60.0],
          [165.1, 58.2],
          [175.3, 72.7],
          [154.9, 54.1],
          [158.8, 49.1],
          [172.7, 75.9],
          [168.9, 55.0],
          [161.3, 57.3],
          [167.6, 55.0],
          [165.1, 65.5],
          [175.3, 65.5],
          [157.5, 48.6],
          [163.8, 58.6],
          [167.6, 63.6],
          [165.1, 55.2],
          [165.1, 62.7],
          [168.9, 56.6],
          [162.6, 53.9],
          [164.5, 63.2],
          [176.5, 73.6],
          [168.9, 62.0],
          [175.3, 63.6],
          [159.4, 53.2],
          [160.0, 53.4],
          [170.2, 55.0],
          [162.6, 70.5],
          [167.6, 54.5],
          [162.6, 54.5],
          [160.7, 55.9],
          [160.0, 59.0],
          [157.5, 63.6],
          [162.6, 54.5],
          [152.4, 47.3],
          [170.2, 67.7],
          [165.1, 80.9],
          [172.7, 70.5],
          [165.1, 60.9],
          [170.2, 63.6],
          [170.2, 54.5],
          [170.2, 59.1],
          [161.3, 70.5],
          [167.6, 52.7],
          [167.6, 62.7],
          [165.1, 100.3],
          [162.6, 66.4]
        ]
      },
      {
        name: 'Machine3',
        type: 'scatter',
        data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
        [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
        [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
        [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
        [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
        [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
        [164.1, 71.6], [169.5, 52.8],
        [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
        [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
        [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
        [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
        [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
        [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
        [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
        [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
        [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],

        [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
        [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
        [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
        [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
        [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
        [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
        [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
        [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
        ]
      }
    ]
  };

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
  //for references : https://stackoverflow.com/questions/52771079/echarts-display-corresponding-legend-for-each-bar

  const stackedBar = {
    legend: {
      orient: 'vertical',
      right: "0%",
      top: 'center',
      formatter: "40",
    },
    title: {
      text: 'Hourly Output- Chip Operation By D_MachineID',
      left: 'center'
    },
    xAxis: {
      data: ['D1', 'D2', 'D3', 'D4']
    },
    yAxis: { type: 'value' },
    series: series.map((item, index) => Object.assign(item, {
      type: 'bar',
      stack: true,
      label: {
        show: index = false,
        formatter: genFormatter(series),
        fontSize: 20,
        color: 'black',
        position: 'top'
      },
    }))
  }

  const line = {
    title: {
      text: 'Production Progress -All',
      left: 'center'
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
        color: "black"
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

  const singleStat = {

  };

  const gauge = {

  };

  const pie = {

  };

  const discrete = {
    tooltip: {
      formatter: function (params) {
        return params.marker + params.name + ': ' + (new Date(params.value[1])).toLocaleTimeString() + ' to ' + (new Date(params.value[2])).toLocaleTimeString();
      }
    },
    //color:['#edd70c','#d45e15','#75d874','#edad0c','#0c93ed','#eb0c29' ],
    legend: {
      show: true,
      data: types
    },
    title: {
      text: 'Machine State',
      left: 'center'
    },
    grid: {
      height: 150,
      // width:500
    },
    xAxis: {
      min: startTime,
      scale: true,
      axisLabel: {
        formatter: function (val) {
          return (new Date(val)).toLocaleTimeString();
        }
      }
    },
    yAxis: {
      data: categories
    },
    series: [
      {
        type: 'custom',
        renderItem: renderItem,
        dimensions: ['Paused', 'Stopping', 'Running', 'Pausing', 'Idle', 'Disconnected'],
        itemStyle: {
          opacity: 0.8,
          show: true
        },
        encode: {
          x: [1, 2],
          y: 0
        },
        data: disData
      }
    ]
  };

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
    ],
  };
  return (
    <div>
      <h3>Graphs</h3>
      <div className="flex-container">
        <div>
          <p>Rejection code Heatmap</p>
          <ReactEcharts option={heatMap} />
        </div>
        <div>
          <p>TotalDuration by D_MachId</p>
          <ReactEcharts option={point} />
        </div>
        <div>
          <p>Bar Chart</p>
          <ReactEcharts option={bar} />
        </div>
        <div>
          <p>Stacked Bar Chart</p>
          <ReactEcharts option={stackedBar} />
        </div>
        <div>
          <p>Line Chart</p>
          <ReactEcharts option={line} />
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
          <ReactEcharts option={discrete} />
        </div>
        <div>
          <p>OEE Summary by MX</p>
          <ReactEcharts option={lcd} />
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
