import React, { useState } from "react";

//import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import emptyStar from "../../Asset/images/rate/star-active 1.png";
import fullStar from "../../Asset/images/rate/star-inactive 1.png"
import DataFichLogement from "../../datas/logements.json";
import Collapse from "../Collapse/Collapse.js";
import Carrousel from "../Fichelogement/carousel.js"



const FicheLogement = () => {
  /* Récupère la bonne fiche */
  const { id } = useParams();

  const ficheLogement = DataFichLogement.find((logement) => logement.id === id);

  /* Tags */
  const tagsLogement = ficheLogement.tags.map((tags, i) => {
    return <tagsLogement key={i} nom={tags} />;
  });

  /* Équipements */
  const equipements = ficheLogement.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <>
      {ficheLogement ? (
        <div className="Fiche-container">
          <Carrousel slides={ficheLogement?.pictures} />
          <section className="Fiche-logement">
            <div className="description-info">
              <div className="description-info__titletags">
                <div className="description-info__titletags__title">
                  <span className="titre-logement">{ficheLogement?.title}</span>
                  <span className="endroit-logement">
                    {ficheLogement?.location}
                  </span>
                </div>
                {/* Tags */}
                <div className="description-info__titletags__tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="description-info__proprietaire">
                {/* Hosting */}
                <div className="description-info__proprietaire__nom-prop">
                {/*  <Host
                    name={ficheLogement.host.name}
                   picture={ficheLogement.host.picture} />*/}
                  
                </div>
                {/* Rating */}
                <div className="description-info__proprietaire__rate">
                  <Rate score={ficheLogement.rating} />
                </div>
              </div>
            </div>
          </section>
          {/* Collapse */}
          <div className="description-centent">
            <div className="description-centent__description">
              <Collapse
                title="Description"
                content={ficheLogement.description}
              />
            </div>
            <div className="description-centent__equipement">
              <Collapse title="Équipements" content={equipements} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/" />
      )}
    </>
  );
};


function Rate(props) {
    const score = props.score;
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="rate-contenair">
      {notes.map((note) =>
        score >= note ? (
          <img
            key={note.toString()}
            className="etoile"
            src={emptyStar}
            alt="star"
          />
        ) : (
          <img
            key={note.toString()}
            className="etoile"
            src={fullStar}
            alt="star"
          />
        )
      )}
    </div>
  );
}

export default Rate;