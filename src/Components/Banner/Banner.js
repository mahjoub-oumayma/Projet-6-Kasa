import React from "react";
import route from "react-router-dom";


function Banniere({ image, texte }) {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="Bannière" />
      <div className="banner__sombre"></div>
      <span className="banner__txt">{texte}</span>
    </div>
  );
}

export default Banniere;