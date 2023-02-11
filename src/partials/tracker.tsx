import React from "react"

interface TrackerProps{
  tableTitle:string;
  data: []; 
}

function Tracker(props:TrackerProps){
  return(
  <div>
    <div className="table-title">
      {props.tableTitle}
    </div>
  </div>
  )
}
