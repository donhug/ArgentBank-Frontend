import './Form.css'
import {useSelector, useDispatch} from "react-redux";
import Button from "../ButtonForm/Button.jsx";
import {useState} from "react";
import {changeUsername} from "../../store/userSlice.js";

function Form({setIsEditing}) {
    const dispatch = useDispatch();
    const Uname = useSelector(state => state.user.userName) ;
    const Fname = useSelector(state => state.user.firstName) ;
    const Lname = useSelector(state => state.user.lastName) ;

    const [userName, setUserName] = useState(Uname);
    const handleNameChange = (e) => {
        e.preventDefault();
        dispatch(changeUsername(userName));
        setIsEditing(false);
    }
    return <>

        <div className="form">
            <h1>Edit user info</h1>
            <form onSubmit={handleNameChange} className="form-horizontal">

                <div className="form-group">
                    <label>User Name :</label>
                    <input type="text"
                           value={userName}
                           onChange={(e) => setUserName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>First Name :</label>
                    <input type="text" id="Fname" value={Fname} disabled/>
                </div>

                <div className="form-group">
                    <label>Last Name :</label>
                    <input type="text" id="Lname" value={Lname} disabled/>
                </div>


                <div className="form-btn">
                    <Button type="submit" txt="Save"/>
                    <Button
                        onClick={()=> setIsEditing(false)}
                        type="button"
                        txt="Cancel"
                    />
                </div>

            </form>

        </div>

    </>
}
export default Form;