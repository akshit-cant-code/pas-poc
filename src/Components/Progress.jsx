import * as React from "react";



function ProgressBar(props){
  var progress = props.progress
    return (<div>
      <div id="myProgress">
    <div id="myBar" style={{width : progress}}></div>
  </div> <p>{progress}</p>
  </div>); 
}

export default ProgressBar;