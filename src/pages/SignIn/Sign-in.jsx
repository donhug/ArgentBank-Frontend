import './Sign-in.css'
import Input from "../../components/Input/Input.jsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {login, setProfile} from "../../store/userSlice.js";
import {useNavigate} from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const loginResponse = await fetch(
                'http://localhost:3001/api/v1/user/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            )

            const loginData = await loginResponse.json()

            const token = loginData.body.token
            dispatch(login({token}))
            localStorage.setItem('token', token)

            //token dans userSlice
            dispatch(login({ token }))


            const profileResponse = await fetch(
                'http://localhost:3001/api/v1/user/profile',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            const profileData = await profileResponse.json()

            // stockage du profil dans le setProfil de userSlice
            dispatch(setProfile(profileData.body))

            navigate('/User')

        } catch (error) {
            console.log('Erreur login :', error)
        }
    }

    return <>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleLogin}>

                    <Input
                        label="Email"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="Password"
                        type="password"
                        id="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button type="submit" className="sign-in-button">Sign In</button>

                </form>
            </section>
        </main>
    </>

}

export default Login;