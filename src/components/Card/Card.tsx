import React from "react";
import "./Card.scss";

function Card(props: any): JSX.Element {
  const { src, title, description, price, onClick } = props;
  return (
    <div className="card" onClick={onClick}>
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
