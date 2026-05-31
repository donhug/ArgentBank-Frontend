import './Account.css'
import {useNavigate} from "react-router-dom";

function Account(props) {
    const navigate = useNavigate();
    return (
        <section className={props.transactionMode ? 'account transaction' : 'account'}>
            <div className="account-content-wrapper">
                <h3 className="account-title">{props.title}</h3>
                <p className="account-amount">${props.amount}</p>
                <p className="account-amount-description">{props.desc}</p>
            </div>
            {props.transactionMode ?
                <div className="account-content-wrapper cta">
                    <button onClick={()=>navigate(-1)} className="payout transaction-button ">X</button>
                </div>:
                <div className="account-content-wrapper cta">
                    <button onClick={()=>navigate('/Transaction', {
                        state: {
                            title: props.title,
                            amount: props.amount,
                            desc: props.desc
                        }
                    })} className="transaction-button">View transactions</button>
                </div>
            }
        </section>
    )
}

export default Account;