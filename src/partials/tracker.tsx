import React from "react";
import Bill from "bill";

import { Bills } from "../types";
interface TrackerProps {
  tableTitle: string;
  data: Bills;
}

function Tracker(props: TrackerProps) {
  return (
    <div>
      <div className="table-title"></div>
      {props.data.bills.map((bill, index) => (
        <div key={index}>
          <Bill
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
