import React, { useState, useEffect } from 'react';
import '../../styles/css/shopping.css';
import { useStateValue } from '../Context/StateProvider';
import clipboard from '../../styles/images/checkout/clipboard.png';
import PIForm from './PIForm';

function Shopping() {
    const [count, setCount] = useState(0);
    const [state, dispatch] = useStateValue();

    return (
        <div className="shopping">
            {/* SHOPPING TASKS */}
            <div className="shopping__tasks">
                <div className="shopping__tasks-progress"></div>
                <div className="task">

                    <div className="shopping__tasks-task">
                        <PIForm count={count} setCount={setCount}/>
                    </div>
                </div>
            </div>
            <div className="checkout__calc">
                <h1>Order Summary</h1>
                <div className="checkout__add">
                    <img src={clipboard} alt="delivery-truck" />
                    <div className="checkout__add-text">
                        <h3>to get <span>15%</span> offer</h3>
                        <p>buy books more than <span>৳1000</span></p>
                    </div>
                </div>
                <div className="calc">
                    <div className="calc__item">
                        <div className="item__name">Number of Books</div> <div>{state.basket.length}</div>
                    </div>
                    <div className="calc__item">
                        <div className="item__name">Subtotal</div> <div>৳ {state.total}</div>
                    </div>
                    <div className="calc__item">
                        <div className="item__name">Shipping</div> <div>৳ 50</div>
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
    )
}

export default Shopping
