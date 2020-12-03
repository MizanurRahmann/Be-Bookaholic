import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import orderConfirmed from "../../styles/images/payments/order_confirmed.svg";

function Confirmation({ setCount }) {
    const [state, dispatch] = useStateValue();

    useEffect(() => {
        dispatch({ type: "EMPTY_BASKET" });
    }, []);

    return (
        <div className="confirmation">
            <img src={orderConfirmed} alt="Order Confirmed" />
            <div>
                <div to="/" onClick={() => setCount(1)}>
                    <i class="fas fa-arrow-left"></i> Back
                </div>
            </div>
        </div>
    );
}

export default Confirmation;
