import  Footer from "../../Components/Footer/Footer.js"
import Header from "../../Components/header/header.js"
import style from '../../Styles/Pages/Erorpage.scss'

function PageEroor (){
    return ( 
        <div class="eror-container">
            <Header/>
            <p class="eror-title">404</p>
            <p class="eror-text">Oups! La page que vous demandez n'existe pas.</p>
            <p> Retourner sur la page d’accueil </p>
            <Footer/>
        </div>
    )
};
export default PageEroor;