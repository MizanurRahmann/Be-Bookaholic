import React from "react";
import cashondelivery from "../../styles/images/payments/logistics.svg";

function CashOnDeliveryMethod({ setCount }) {
    return (
        <div className="CashOnDeliveryMethod">
            <div className="image">
                <img src={cashondelivery} alt="cashOnDelivery" />
            </div>
            <div className="des">
                <h2>Cash on</h2>
                <h1>Delivery</h1>
                <p>
                    You have to pay the price for your books, when you recive
                    the delivery. Thanks for your order.
                </p>
                <div className="buttonBox">
                    <button className="back" onClick={() => setCount(0)}>
                        <i class="fas fa-arrow-left"></i> Back
                    </button>
                    <button className="submit" onClick={() => setCount(2)}>
                        Confirm Order
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CashOnDeliveryMethod;
