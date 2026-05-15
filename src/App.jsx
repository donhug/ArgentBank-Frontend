import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Accueil from "./pages/Accueil/Accueil.jsx";
import SignIn from "./pages/SignIn/Sign-in.jsx";

function App() {

  return (
    <Router>
      <Header />
        <SignIn/>
      <Footer />
    </Router>
  )
}

export default App
