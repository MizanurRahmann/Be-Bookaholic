import React, { useState } from "react";
import SelectPaymentMethod from "./SelectPaymentMethod";

function PaymentForm() {
    const [method, setMethod] = useState(0);

    return (
        <form className="payment">
            <h1>Payment</h1>
            <SelectPaymentMethod method={method} setMethod={setMethod} />
            {method === 0 ? (
                <p>MasterCard Method</p>
            ) : method === 1 ? (
                <p>bKash Method</p>
            ) : method === 2 ? (
                <p>rocket Method</p>
            ) : (
                <p>CashOnDelivery Method</p>
            )}
        </form>
    );
}

export default PaymentForm;
