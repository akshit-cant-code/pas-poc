import * as React from "react";
import { LinearProgress } from "@mui/material";
import {makeStyles} from "@mui/styles";
//const {LinearProgress, makeStyles} = MaterialUI


function ProgressBar(props){
 var progress = props.progress
    return (<div>
      <div id="myProgress">
    <div id="myBar" style={{width : progress}}></div>
  </div> <p>{progress}</p>
  </div>); 
}


export default ProgressBar;