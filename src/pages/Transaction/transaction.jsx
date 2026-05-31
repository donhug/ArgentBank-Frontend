import './transaction.css'
import Account from "../../components/Account/Account.jsx";
import Payout from "../../components/Payout/payout.jsx";
import {useLocation} from "react-router-dom";

function Transaction() {
    const location = useLocation();
    const { title, amount, desc } = location.state;
    return<>
        <main className="main page">
            <Account
                transactionMode="true"
                title={title}
                amount={amount}
                desc={desc}
            />
            <div className="content">
                <div className="content-left">
                    <p>Date</p>
                    <p>Description</p>
                </div>
                <div className="content-right">
                    <p>Amount</p>
                    <p className="balance">Balance</p>
                </div>
            </div>
            <section className="payment">
                {Array.from({length: 5}).map((_, i) =>(
                    <Payout key={i}/>
                ))}
        </section>
        </main>

    </>
}

export default Transaction;