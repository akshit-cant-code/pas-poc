import React,{ useEffect, useState} from "react";
import GetData from "./GetData";
import ReactEcharts from "echarts-for-react"; 
import { time } from "echarts";

function Point(){

  const [dataList, temp] = useState();
  useEffect(() => {
    fetch('https://localhost:7239/InfluxClient?query=t')
      .then(results => results.json())
      .then(data => {
        temp(
          data
      );
       console.log("data",data)
      });
  }, []);
      console.log(dataList)

  
    const point = {
        title: {
          top: '10%',
          text: 'TotalDuration by D_MachID ',
          left: 'center'
        },
        xAxis: {
          type: 'time',
          scale: true
        },
        yAxis: {
          
          scale: true
        },
        grid: {
          top: '20%',
          height: '60%',
          widht: '10%',
          right: '32%'
        },
        legend: {
          icon: 'rect',
          left: '68%',
          right: '60%',
          top: '20%',
          orient: 'vertical',
          data: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4', 'Machine 5'],
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
        series: dataList
      };
    

    return <ReactEcharts option={point} />;

}
export default Point;