import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

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
function Discrete(){
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
    
    return <ReactEcharts option={discrete}></ReactEcharts>
}
export default Discrete;