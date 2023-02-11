import React from "react";

interface BillProps {
  billType: string;
  billNumber: string;
  title: string;
  latestActionText: string;
  latestActionData: string;
}

function Bill(props: BillProps) {
  return (
    <div className="bill">
      <div className="text-container">
        <div>
          <p>{props.latestActionText}</p>
        </div>
        <p>{props.latestActionData}</p>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Bill;
