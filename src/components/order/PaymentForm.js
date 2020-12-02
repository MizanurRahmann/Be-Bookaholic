import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Components
import CashOnDeliveryMethod from "./CashOnDeliveryMethod";
import MasterCard from "./MasterCard";
import SelectPaymentMethod from "./SelectPaymentMethod";

// Stripe publish key
const promise = loadStripe(
    "pk_test_51HtcNcEQ7fnc9zNapuT3aeJ5k6HqFmGRZFfzqwUYrloTt1hsoxP90KTrceCQdF2N5PO7Vwl1mr2J6IPY0KZdaq8800nEx2Q9Wr"
);

function PaymentForm({ count, setCount }) {
    const [method, setMethod] = useState(0);

    return (
        <form className="payment">
            <h1>Payment</h1>
            <SelectPaymentMethod method={method} setMethod={setMethod} />
            {method === 0 ? (
                <Elements stripe={promise}>
                    <MasterCard setCount={setCount} />
                </Elements>
            ) : method === 1 ? (
                <p>bKash Method</p>
            ) : method === 2 ? (
                <p>rocket Method</p>
            ) : (
                <CashOnDeliveryMethod setCount={setCount} />
            )}
        </form>
    );
}

export default PaymentForm;
