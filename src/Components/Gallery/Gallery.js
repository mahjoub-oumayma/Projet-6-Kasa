import React from "react";
import {Link} from "react-router-dom"
import logement from "../../datas/logements.json"
import Card from "../../Components/Cards/Card.js"
import style from '../../Styles/Components/Gallery.scss'

function Gallery (){
  return (
    <div className="home_gallery">
      
      {logement.map((logement) => {
        return (
          <div className="Gallery">
          <article key={logement.id}>
            <Link to={`/logement/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
          </div>
        );
      })}
    </div>
  )
};

export default Gallery;

