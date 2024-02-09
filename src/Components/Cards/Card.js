import React from 'react';
import route from "react-router-dom";
import style from "../../Styles/Components/Card.scss"


function Card({image, title}) {
    return (
      <div className="card">
        <img src={image} alt={title} className="card_img" />
        <div className="card_overlay"></div>

        <h2 className="card_title">{title}</h2>
      </div>
    );
}

export default Card;