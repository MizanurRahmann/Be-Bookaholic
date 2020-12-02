import React, { useEffect } from "react";

//Images
import bkash from "../../styles/images/payments/bkash.svg";
import rocket from "../../styles/images/payments/rocket.svg";
import mastercard from "../../styles/images/payments/mastercard.svg";
import cashondelivery from "../../styles/images/payments/cash-on-delivery.svg";

function SelectPaymentMethod({ method, setMethod }) {
    return (
        <div className="payment-options">
            {method !== 0 ? (
                <div
                    className="payment-option"
                    onClick={() => {
                        setMethod(0);
                    }}
                >
                    <img src={mastercard} alt="mastercard" />
                    Master Card
                </div>
            ) : (
                <div className="payment-option active">
                    <img src={mastercard} alt="mastercard" />
                    Master Card
                    <i class="fas fa-check-circle"></i>
                </div>
            )}

            {method !== 1 ? (
                <div
                    className="payment-option bkash"
                    onClick={() => {
                        setMethod(1);
                    }}
                >
                    <img src={bkash} alt="bkash" />
                    bKash
                </div>
            ) : (
                <div className="payment-option bkash active">
                    <img src={bkash} alt="bkash" />
                    bKash
                    <i class="fas fa-check-circle"></i>
                </div>
            )}

            {method !== 2 ? (
                <div
                    className="payment-option rocket"
                    onClick={() => {
                        setMethod(2);
                    }}
                >
                    <img src={rocket} alt="rocket" />
                    Rocket
                </div>
            ) : (
                <div className="payment-option rocket active">
                    <img src={rocket} alt="rocket" />
                    Rocket
                    <i class="fas fa-check-circle"></i>
                </div>
            )}

            {method !== 3 ? (
                <div
                    className="payment-option"
                    onClick={() => {
                        setMethod(3);
                    }}
                >
                    <img src={cashondelivery} alt="cashOnDelivery" />
                    Cash On delivery
                </div>
            ) : (
                <div className="payment-option active">
                    <img src={cashondelivery} alt="cashOnDeliveryet" />
                    Cash On delivery
                    <i class="fas fa-check-circle"></i>
                </div>
            )}
        </div>
    );
}

export default SelectPaymentMethod;
