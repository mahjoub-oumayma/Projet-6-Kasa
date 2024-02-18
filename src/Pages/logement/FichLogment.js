import React from "react";
import FicheLogementDisplay from "../../Components/ficheLogement/FicheLogementDisplay";
import Footer from "../../Components/footer/Footer";
import Header from "../../Components/header/Header";

const FichLogment = () => {
  return (
    <div className="logement">
      <Header />
      <main>
        <FicheLogementDisplay />
      </main>

      <Footer />
    </div>
  );
};

export default FichLogment;
