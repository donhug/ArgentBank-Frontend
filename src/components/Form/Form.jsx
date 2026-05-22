import './Form.css'
import {useSelector, useDispatch} from "react-redux";
import Button from "../ButtonForm/Button.jsx";
import {useState} from "react";
import {changeUsername} from "../../store/userSlice.js";

function Form(){
    const dispatch = useDispatch();
    const Uname = useSelector(state => state.user.userName) ;
    const Fname = useSelector(state => state.user.firstName) ;
    const Lname = useSelector(state => state.user.lastName) ;

    const [userName, setUserName] = useState(Uname);
    const handleNameChange = (e) => {
        e.preventDefault();
        dispatch(changeUsername(userName));
    }
    return <>
        <div className="form">
            <form onSubmit={handleNameChange} className="form-horizontal">

                <label>User Name</label>
                <input type="text"
                       value={userName}
                       onChange={(e) => setUserName(e.target.value)}
                />

                <label>First Name</label>
                <input type="text" id="Fname" value={Fname} disabled/>

                <label>Last Name</label>
                <input type="text" id="Lname" value={Lname} disabled/>

                <div className="form-btn">
                    <Button type="submit" txt="Save"/>
                    <Button txt="Cancel"/>
                </div>

            </form>

        </div>


    </>
}
export default Form;