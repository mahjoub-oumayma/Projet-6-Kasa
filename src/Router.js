import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Apropos from "./Pages/Apropos/Apropos"
import Eroor from "./Pages/Eroor/Eroor"
import Logement from "./Pages/Logement/Logement"
function App() {
    return (
      <div className='Router'>
      
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Apropos" element={<Apropos/>} />
          <Route path="/" element={<Eroor/>} />
          <Route path="/logement/:id" element={<Logement/>} />
        </Routes>
        </div>
    )};