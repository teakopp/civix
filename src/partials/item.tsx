import React from "react";

interface ItemProps {
  type: string;
  number: string;
  title: string;
  latestActionText: string;
  latestActionDate: string;
}

function Item(props: ItemProps) {
  return (
    <div className="bill">
      <div className="text-container">
        <div>
          <p>{props.type + " " + props.number}</p>
        </div>
        <div>
          <p>{props.title}</p>
        </div>
        <div>
          <p>{props.latestActionText}</p>
        </div>
        <p>{props.latestActionDate}</p>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Item;
