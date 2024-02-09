import React from "react";
import { useParams } from 'react-router-dom';
import data from "../../datas/logements.json"
import FicheLogement from "../../Components/Fichelogement/fichelogement.js";
import Footer from "../../Components/Footer/Footer.js";
import Header from "../../Components/header/header.js";

function FichLogment () {

  // On récupère l'id dans l'URL
  const { id } = useParams();
    // On vérifie si l'id est présent dans data.json
  const logement = data.find(datalogement => datalogement.id === id)
  return (
    <div className="logement">
      <Header />
      <main>
        <FicheLogement data={logement}/>
      </main>
      <Footer />
    </div>
  );
};

export default FichLogment;