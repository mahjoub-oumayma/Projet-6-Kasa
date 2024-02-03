import React from "react";
import FicheLogement from "../../Components/Fichelogement/fichelogement.js";
import Footer from "../../Components/Footer/Footer.js";
import Header from "../../Components/header/header.js";

const FichLogment = () => {
  return (
    <div className="logement">
      <Header />
      <main>
        <FicheLogement/>
      </main>

      <Footer />
    </div>
  );
};

export default FichLogment;