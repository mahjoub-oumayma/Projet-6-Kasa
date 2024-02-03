import react from "react-router-dom"
import Header from "../../Components/header/header.js"
import Footer from "../../Components/Footer/Footer.js"
import banner__img from "../../Asset/images/Banner-imgs/Aboutbanner.png"
import Banner from "../../Components/Banner/Banner.js"
import Collapse from "../../Components/Collapse/Collapse.js"
function About() {

  return (
    <div className="About">

      <Header />
      <main>

        <banner image={banner__img} titre="" />


        <div className="Collapse">
          <div className="Collapse__dropdown">
            {Collapse.map((item) => {
              return (
                <div key={item.id}>
                  <collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer/>

    </div>

  )
};
export default About;