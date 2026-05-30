import './Header.css'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import logo from '../../assets/images/argentBankLogo.webp'
import {useSelector} from "react-redux";
import {logout} from "../../store/userSlice.js";
import {useDispatch} from "react-redux";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userName = useSelector(state => state.user.userName) ;
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }
    return (
        <header>
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo" >
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    {isAuthenticated ?(
                        <>
                            <button onClick={() => navigate("/User")} className="main-nav-item">
                                <i className="fa fa-user-circle"></i>
                                {userName}
                            </button>
                            <button onClick={handleLogout} className="main-nav-item">
                                <i className="fa fa-sign-out"></i>
                                Sign Out
                            </button>
                        </>
                    ) :(
                        <button onClick={() => navigate("/Sign-in")} className="main-nav-item" >
                            <i className="fa fa-user-circle"></i>
                            Sign-In
                        </button>
                    )}


                </div>
            </nav>
        </header>
    )
}

export default Header;