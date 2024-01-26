import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home/Home.js"
import Apropos from "./Pages/Aboutpage/Aboutpage.js"
import Eroor from "./Pages/Erorpage/Erorpage.js"
import Logement from "./Pages/Logement/Logement.js"

function App() {
  return (
    <div className='App'>

       <Routes>
        
        <Route path="/Home" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Logement/:id" element={<Logement />} />
        <Route path="/" element={<Eroor />} />
      </Routes>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </div>
    
  );
}

export default App;
