import React from "react";
import Banner from "../../Components/banner/Banner";
import Footer from "../../Components/footer/Footer";
import Gallery from "../../Components/gallery/Gallery";
import Header from "../../Components/header/Header";
import imgHomeBanner from "../../assets/images/banner/homeBanner.png";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
