import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useStateValue } from "../Context/StateProvider";
import axios from "./axios";

function MasterCard({ setCount }) {
    const stripe = useStripe();
    const elements = useElements();

    const [state, dispatch] = useStateValue();

    const [error, setError] = useState("");
    const [disable, setDisable] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [seccess, setSucces] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // get the special stripe secret which helps us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payments/create?total=${(state.total + 50) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [state.basket]);

    console.log("This client secret is --> ", clientSecret);

    // Runs when client confirm for his/her order
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                setSucces(true);
                setError("");
                setProcessing(false);
                setCount(2);
            });
    };

    // Any change in card element
    const handleChange = (event) => {
        setDisable(event.empty);
        setError(event.error ? event.error.message : "");
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            {error && <div>{error}</div>}
            <div className="buttonBox">
                <button className="back" onClick={() => setCount(0)}>
                    <i class="fas fa-arrow-left"></i> Back
                </button>
                <button className="submit" onClick={() => handleSubmit}>
                    Confirm Order
                </button>
            </div>
        </form>
    );
}

export default MasterCard;
