import './Sign-in.css'
import Input from "../../components/Input/Input.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {login, setProfile} from "../../store/userSlice.js";
import {useNavigate} from "react-router-dom";

function Login() {
    return <>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>

                    <Input
                        label="Username"
                        type="text"
                        id="username"
                    />
                    <Input
                        label="Password"
                        type="Password"
                        id="Password"
                    />

                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/*-- PLACEHOLDER DUE TO STATIC SITE -*/}
                    <Link to="/User" className="sign-in-button">Sign In</Link>
                    {/*-- SHOULD BE THE BUTTON BELOW -*/}
                    {/*<button class="sign-in-button">Sign In</button>*/}
                    {/*--  -*/}
                </form>
            </section>
        </main>
    </>

}

export default Login;