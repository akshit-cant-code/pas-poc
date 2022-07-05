import React from 'react';
import ReactEcharts from 'echarts-for-react';
import moment from "moment";

function Line(){
    const line = {
        title: {
          text: 'Production Progress -All',
          left: 'center'
        },
        xAxis: [{
          type: "category",
          axisLabel: {
            formatter: function(value){
                    return moment.unix(value).format('D/MM');;
            }},
          data: [ 1568160683.5443,1525168800000,1656312429,1656226029,1656139629,1656053229,1655707629,1655102829,1609439400,
            1525168800000],
         
    
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
        ],
        backgroundColor:"#1E1C1B"
    
      };
    
    return <ReactEcharts theme={'dark'} option={line}/>
}

export default Line;