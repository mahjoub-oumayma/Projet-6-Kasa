import React, { useState } from "react";
import Collapse from "../Collapse/Collapse.js";
import Carrousel from "../Fichelogement/carousel.js"
import Stars from "../Fichelogement/stars.js"
import style from '../../Styles/Components/Fichelogement.scss'




function ficheLogement({data}) {


  /* Équipements */
  const equipements = data.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <div className="fiche-logement">
      <div className="Fiche-container">
        <Carrousel slides={data.pictures} />
        <section className="Fiche-logement">
          <div className="description-info">
            <div className="description-info__titletags">
              <div className="description-info__titletags__title">
                <span className="titre-logement">{data.title}</span>
                <span className="endroit-logement">
                  {data.location}
                </span>
              </div>
              {/* Tags */}
              <div className="description-info__titletags__tags">
                {data.tags.map((tag, index) => <button className="tag" key={"tag-" + index}>{tag}</button>)}
              </div>
            </div>

            <div className="description-info__proprietaire">
              {/* Hosting */}
              
              <div className="description-info__proprietaire__nom-prop"> <p>Alexender Dumas</p>
              {/*  <Host
                  name={ficheLogement.host.name}
                  picture={ficheLogement.host.picture} />*/}
                
              </div>
              {/* Rating */}
              <div className="description-info__proprietaire__rate">
                <Stars data={data} />
              </div>
            </div>
          </div>
        </section>
        {/* Collapse */}
        <div className="description-centent">
          <div className="description-centent__description">
            <Collapse
              title="Description"
              content={data.description}
            />
          </div>
          <div className="description-centent__equipement">
            <Collapse title="Équipements" content={equipements} />
          </div>
        </div>
      </div>
    </div>
  )
}




export default ficheLogement;