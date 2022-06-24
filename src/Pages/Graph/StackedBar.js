import React from 'react';
import ReactEcharts from 'echarts-for-react';

var genFormatter = (series) => {
    return (param) => {
      let sum = 0;
      series.forEach(item => {
        sum += item.data[param.dataIndex];
      });
      return sum
    }
  };
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
function StackedBar(){
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
    
    return <ReactEcharts option={stackedBar}/>
}
export default StackedBar