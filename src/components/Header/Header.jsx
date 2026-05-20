import './Header.css'
import {Link, NavLink} from 'react-router-dom'
import logo from '../../assets/images/argentBankLogo.png'
import {useSelector} from "react-redux";

function Header() {
    const userName = useSelector(state => state.user.userName) ;
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
                    <Link to="/User" className="main-nav-item" >
                        <i className="fa fa-user-circle"></i>
                        {userName}
                    </Link>
                    <Link to="/Sign-In" className="main-nav-item" >
                        <i className="fa fa-user-circle"></i>
                        Sign-In
                    </Link>

                </div>
            </nav>
        </header>
    )
}

export default Header;