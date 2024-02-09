import Header from "../../Components/header/header.js"
import Footer from "../../Components/Footer/Footer.js"
import banner__img from "../../Asset/images/Banner-imgs/Aboutbanner.png"
import Banner from "../../Components/Banner/Banner.js"
import Collapse from "../../Components/Collapse/Collapse.js"

function About() {
  const content = [
    {
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      title: "Service",
      content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },
  ]
  return (
    <div className="About">
      <Header />
      <main>
        <Banner image={banner__img} titre="" />
          <div className="Collapse-container">
            {content.map((item, index) => {
              return <Collapse key={index} title={item.title} content={item.content}/>
            })}
        </div> 
      </main>
      <Footer/>

    </div>

  )
};
export default About;