import React from "react";

import "./CardInfo.scss";

function CardInfo(props: any): JSX.Element {
  const { title, description, onClick } = props;
  return (
    <div className="cardInfo">
      <div className="cardInfo__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  );
}

export default CardInfo;
