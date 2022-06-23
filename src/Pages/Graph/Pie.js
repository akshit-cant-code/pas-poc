import React from "react";
import ReactEcharts from "echarts-for-react"; 

var dataList = [
    { value: 1048, name: 'CardSetUp1' },
    { value: 735, name: 'CardSetUp2' },
    { value: 580, name: 'CardSetUp3' },
    { value: 484, name: 'CardSetUp4' },
    { value: 300, name: 'CardSetUp5' },
    { value: 10, name: 'CardSetUp6' },
    { value: 104, name: 'CardSetUp7' },
    { value: 75, name: 'CardSetUp8' },
    { value: 80, name: 'CardSetUp9' },
    { value: 84, name: 'CardSetUp10' },
    { value: 300, name: 'CardSetUp11' },
    { value: 102, name: 'CardSetUp12' },
    { value: 148, name: 'CardSetUp13' },
    { value: 750, name: 'CardSetUp14' },
    { value: 500, name: 'CardSetUp15' },
    { value: 44, name: 'CardSetUp16' },
    { value: 390, name: 'CardSetUp17' },
    { value: 190, name: 'CardSetUp18' },
    { value: 108, name: 'CardSetUp19' },
    { value: 35, name: 'CardSetUp20' },
    { value: 50, name: 'CardSetUp21' },
    { value: 44, name: 'CardSetUp22' },
    { value: 90, name: 'CardSetUp23' },
    { value: 1000, name: 'CardSetUp24' }

  ];
function Pie() { 
const option = {
    title: {
      text: 'Cards by Card Setup',
      subtext: '',
      left: 'center',
      textStyle: {
        fontSize: 13
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      right: 'right',
      type: 'scroll',
      formatter: name => {
        var value = dataList.filter(row => row.name === name)[0].value
        return name + '    ' + value;
      }
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: '50%',
        data: dataList,
          itemStyle: {
            normal : {
                label : {
                          show : false
                         },
                labelLine : {
                              show : false
                             }
                }
          }
        }
    ]
  };  
return <ReactEcharts option={option} />;
} 
export default Pie;

