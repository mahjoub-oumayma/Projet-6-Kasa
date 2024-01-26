import react from "react-router-dom"
 import Footer from "../../Components/Footer/Footer.js"
import header from "../../Components/header/header.js"
import banner__img from "../../Asset/images/Banner-imgs/Aboutbanner.png"
import banner from "../../Components/Banner/Banner.js"
import Collapse from "../../Components/Collapse/Collapse.js"
function About() {

  return (
    <div className="About">

      <header />
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