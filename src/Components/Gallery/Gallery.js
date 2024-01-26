import React from "react";
import {Link} from "react-router-dom"
import logement from "../../datas/logements.json"
import Card from "../../Components/Cards/Card.js"

function Gallery (){
    return 
     <div className="home_gallery">
    {logement.map((logement) => {
      return (
        <article key={logement.id}>
          <Link to={`/logement/${logement.id}`}>
            <Card image={logement.cover} title={logement.title} />
          </Link>
        </article>
      );
    })}
  </div>

};

export default Gallery;

