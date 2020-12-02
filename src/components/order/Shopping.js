import React, { useState, useEffect, Component } from "react";
import Stepper from "react-stepper-horizontal";
import { useStateValue } from "../Context/StateProvider";

//Assets
import clipboard from "../../styles/images/checkout/clipboard.png";
import "../../styles/css/shopping.css";

// Components
import PIForm from "./PIForm";
import PaymentForm from "./PaymentForm";

function Shopping() {
    const [count, setCount] = useState(0);
    const [state, dispatch] = useStateValue();

    return (
        <div className="shopping">
            {/* SHOPPING TASKS */}
            <div className="shopping__tasks">
                <div className="shopping__tasks-progress">
                    <Stepper
                        className="stepperjs"
                        steps={[
                            { title: "Shipping Address" },
                            { title: "Payment" },
                            { title: "Confirm Order" },
                        ]}
                        activeStep={count}
                        size={40}
                        activeColor="#3465BF"
                        completeColor="#2F3973"
                        circleFontSize={20}
                    />
                </div>
                <div className="task">
                    <div className="shopping__tasks-task">
                        {count === 0 ? (
                            <PIForm count={count} setCount={setCount} />
                        ) : count === 1 ? (
                            <PaymentForm />
                        ) : null}
                    </div>
                </div>
            </div>

            {/* SHOPPING CALCULATIONS */}
            <div className="checkout__calc">
                <h1>Order Summary</h1>
                <div className="checkout__add">
                    <img src={clipboard} alt="delivery-truck" width="90px" />
                    <div className="checkout__add-text">
                        <h3>Be Bookaholic</h3>
                        <p>
                            Be <span>Amazing</span>
                        </p>
                    </div>
                </div>
                <div className="calc">
                    <div className="calc__item">
                        <div className="item__name">Number of Books</div>{" "}
                        <div>{state.basket.length}</div>
                    </div>
                    <div className="calc__item">
                        <div className="item__name">Total</div>
                        <div className="totalCost">
                            {state.basket.length > 0 ? state.total + 50 : 0}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shopping;
