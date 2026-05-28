import './transaction.css'
import Account from "../../components/Account/Account.jsx";

function Transaction() {
    return (
        <Account
            transactionMode="true"
            title="Argent Bank Checking (x8349)"
            amount="2,082.79"
            desc="Available Balance"
        />
    )
}

export default Transaction;