import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Apropos from "./Pages/Aboutpage/Aboutpage"
import Eroor from "./Pages/Erorpage/Erorpage"
import Logement from "./Pages/Logement/Logement"
function Router () {
    return (
      
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Apropos" element={<Apropos/>} />
          <Route path="/*" element={<Eroor/>} />
          <Route path="/logement/:id" element={<Logement/>} />
        </Routes>
        
    )};
    export default Router  ;