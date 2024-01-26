import react from "react"
import route from "react-router-dom"
import  Footer from "../../Components/Footer/Footer.js"
import header from "../../Components/header/header.js"

function PageEroor (){
    return ( 
     
     <div class="eror-container">
        <header/>
    <p class="eror-title">404</p>
    <p class="eror-text">Oups! La page que vous demandez n'existe pas.</p>
    <p> Retourner sur la page d’accueil </p>
       <Footer/>
     </div>
    

    )
};
export default PageEroor;