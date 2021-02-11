import React from "react";

const InfoLine = props => {
  return (
    <div className="infoline-ctr">
      <span className="line-data">
        <strong>{props.title}</strong>
      </span>
      <span className="line-data">{props.value}</span>
    </div>
  );
};

export default InfoLine;
