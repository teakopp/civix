import React from "react";
import Selector from "./selector";

interface ItemProps {
  type: string;
  number: string;
  title: string;
  latestActionText: string;
  latestActionDate: string;
}


function Item(props: ItemProps) {
  return (
    <div className="item">
      <div className="text-container">
        <div className="item-hr">
          <p>{props.type + " " + props.number}</p>
        </div>
        <div className="item-title">
          <p>{props.title}</p>
        </div>
        <div className="item-action-text">
          <p>{props.latestActionText}</p>
        </div>
        <div className="item-action-date">
          <p>{props.latestActionDate}</p>
        </div>
      </div>
        <div className="item-button-container">
	<div>Do you support this Bill?</div>
          <Selector />
        </div>
    </div>
  );
}

export default Item;
