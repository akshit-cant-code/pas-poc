import React,{ useEffect, useState} from "react";
import GetData from "./GetData";
import ReactEcharts from "echarts-for-react"; 
import { time } from "echarts";
import useFetch from "./useFetch";

function Point(props){
  console.log("pointprops",props.date.Range)
  const [dataList, setDataList] = useState();

  //const data = useFetch("https://localhost:7239/InfluxClient?query=t");

  //console.log("fetch",data);
 
  useEffect(() => {
    fetch(`https://localhost:7239/InfluxClient?query=select * from airSensors where time>'${props.date.Range[0].toISOString()}' and time < '${props.date.Range[1].toISOString()}' group by *`)
      .then(results => results.json())
      .then(data => {
        setDataList(data);
       console.log("data called")
      });
  }, [props.date.Range]);

  console.log("dataList",dataList);
  
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
          widht: '70%',
          right: '24%'
        },
        legend: {
          icon: 'rect',
          left: '78%',
          right: '60%',
          top: '20%',
          orient: 'vertical',
          data: ['Machine 1', 'Machine 2', 'Machine 3'],
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