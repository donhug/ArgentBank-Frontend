import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Accueil from "./pages/Accueil/Accueil.jsx";
import SignIn from "./pages/SignIn/Sign-in.jsx";
import User from "./pages/User/User.jsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchProfile, hydrateUser} from "./store/userSlice.js"
import Transaction from "./pages/Transaction/transaction.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(hydrateUser());
        const token = localStorage.getItem("token");

        if (token) {
            dispatch(fetchProfile());
        }

    }, [dispatch])
  return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Sign-In" element={<SignIn />} />
            <Route path="/User" element={
                <PrivateRoute>
                    <User />
                </PrivateRoute>
            }/>
            <Route path="/Transaction" element={
                <PrivateRoute>
                    <Transaction />
                </PrivateRoute>
            }/>
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
