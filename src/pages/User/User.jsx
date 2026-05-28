import './User.css'
import Account from "../../components/Account/Account.jsx";
import {useSelector} from "react-redux";
import Form from "../../components/Form/Form.jsx";
import Button from "../../components/ButtonForm/Button.jsx";
import {useState} from "react";

function User (){
    const firstName = useSelector(state => state.user.firstName) ;
    const lastName = useSelector(state => state.user.lastName);
    const [isEditing, setIsEditing] = useState(false);

    return (
        <main className="main bg-dark">
            <div className="header">
                {!isEditing &&(
                    <>
                        <h1>
                            Welcome back<br/>
                            {firstName} {lastName +' !'}
                        </h1>
                        <Button
                            onClick={()=> setIsEditing(true)}
                            txt="Edit Name"
                        />
                    </>
                )}
                {isEditing && (
                    <Form setIsEditing={setIsEditing}/>
                )}

            </div>
            <h2 className="sr-only">Accounts</h2>

            <Account
                title="Argent Bank Checking (x8349)"
                amount="2,082.79"
                desc="Available Balance"
            />
            <Account
                title="Argent Bank Savings (x6712)"
                amount="10,928.42"
                desc="Available Balance"
            />
            <Account
                title="Argent Bank Credit Card (x8349)"
                amount="184.30"
                desc="Current Balance"
            />

        </main>
    )
}

export default User;
