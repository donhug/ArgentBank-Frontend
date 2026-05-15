import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Accueil from "./pages/Accueil/Accueil.jsx";

function App() {

  return (
    <Router>
      <Header />
        <Accueil/>
      <Footer />
    </Router>
  )
}

export default App
