import './payout.css'
import {useState} from "react";

function Payout(){
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <div>
            <div className={`payout ${isOpen ? 'payout-open' : ''}`}>
                <div className="pay-left">
                    <p>27/02/20</p>
                    <p>Golden Sun Bakery</p>
                </div>
                <div className="pay-right">
                    <p>$8.00</p>
                    <p>$298.00</p>
                    <button className="info-btn" onClick={()=>setIsOpen(!isOpen)}>
                        <p className={`info ${isOpen ? 'vOpen' : ''}`}>V</p>
                    </button>
                </div>
            </div>
            <div className={`info ${isOpen ? '' : 'infoOpen'}`}>
                <div className="info-title">
                    <p>Transaction type</p>
                    <p> Category</p>
                    <p> Note</p>
                </div>
                <div className="info-description">
                    <p> Electronic</p>
                    <p>Food <i className="fa-solid fa-pen pen"></i></p>
                    <p>Lorem ispum <i className="fa-solid fa-pen pen"></i></p>
                </div>
            </div>
        </div>
    </>
}

export default Payout;