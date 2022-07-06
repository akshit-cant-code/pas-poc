import React from 'react';
import ReactEcharts from 'echarts-for-react';
import moment from "moment";

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
    name: 'Machine1',
    data: [100, 115, 165, 107, 67,0,0,200,0,150,200,50,0,0,250,0,100, 115, 165, 107,150,200,50,0,0,0,0,40,0,100,120,150,80,100,150]
  }, {
    name: 'Machine2',
    data: [85, 106, 129, 161, 123,200,200,0,300,250,50,70,0,0,0,200,85, 106, 129, 161,250,50,70,0,0,0,30,70,0,60,90,20,140,20,100]
  }, {
    name: 'Machine3',
    data: [67, 87, 86, 167, 157,0,0,200,300,50,150,100,0,0,180,70,67, 87, 86, 167,50,150,100,50,70,100,150,120,0,300,400,250,200,180,100]
  }]
function StackedBar(){
    const stackedBar = {
        legend: {
          orient: 'vertical',
          right: "0%",
          top: 'center',
          formatter: "40",
          data: ['Machine1', 'Machine2', 'Machine3'],

          formatter: (name) => {

            var value = stackedBar.series.filter((row) => row.name === name)[0].data;

            var total = 0;

            value.forEach((element) => {

              total += element;

            });

            return (

              name +

              '   ' +

              total

            );

          }
        },
        title: {
          text: 'Hourly Output- Chip Operation By D_MachineID',
          left: 'center'
        },
        grid: {
          top: '20%',
          height: '60%',
          widht: '70%',
          right: '24%'
        },
        xAxis: {
          type: "category",
          axisLabel: {
            formatter: function(value){
                    return moment.unix(value).format('D/MM');;
            }},
          data: [ 1568160683.5443,1525168800000,1656312429,1656226029,1656139629,1656053229,1655707629,1655102829,1609439400,
            1525168800000,1656312429,1656226029,1656139629,1656053229,1655707629,1655102829,1609439400,
            1525168800000,1656312429,1656226029,1656139629,1656053229,1655707629,1655102829,1609439400,
            1525168800000,1656312429,1656226029,1656139629,1656053229,1655707629,1655102829,1609439400,
            1525168800000,1656312429,1656226029]
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
    
    return <ReactEcharts theme={"dark"} option={stackedBar}/>
}
export default StackedBar