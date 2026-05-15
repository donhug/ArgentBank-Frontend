import './Sign-in.css'
import Input from "../../components/Input/Input.jsx";

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
                    <a href="./user.html" className="sign-in-button">Sign In</a>
                    {/*-- SHOULD BE THE BUTTON BELOW -*/}
                    {/*<button class="sign-in-button">Sign In</button>*/}
                    {/*--  -*/}
                </form>
            </section>
        </main>
    </>

}

export default Login;