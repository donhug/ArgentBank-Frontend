import { useSelector } from 'react-redux'
import {Navigate} from "react-router-dom";

function PrivateRoute({children}) {
    const {isAuthenticated, isHydrated} = useSelector(state => state.user);

    console.log('isHydrated:', isHydrated, '| isAuthenticated:', isAuthenticated)
    if (!isHydrated) return null;
    if (!isAuthenticated) return <Navigate to="/Sign-In" replace/>

    return children
}

export default PrivateRoute;