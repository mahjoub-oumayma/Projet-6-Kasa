import React from "react";
import ErrorPage from "../../Components/error/ErrorPage";
import Footer from "../../Components/footer/Footer";
import Header from "../../Components/header/Header";

const NoPage = () => {
  return (
    <>
      <div className="NoPage">
        <Header />
        <main>
          <ErrorPage />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NoPage;
