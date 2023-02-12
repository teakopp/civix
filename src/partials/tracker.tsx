import React from "react";
import Item from "./item";

import { Bill } from "../types";
interface TrackerProps {
  title: string;
  data: Bill[];
}

function Tracker(props: TrackerProps) {
  return (
    <div>
      <div className="table-title">Bill Tracker</div>
      <div className="table-title"></div>
      {props.data.map((bill, index) => (
        <div key={index}>
          <Item
            type={bill.type}
            number={bill.number}
            title={bill.title}
            latestActionText={bill.latestAction.text}
            latestActionDate={bill.latestAction.actionDate}
          />
        </div>
      ))}
    </div>
  );
}

export default Tracker;
