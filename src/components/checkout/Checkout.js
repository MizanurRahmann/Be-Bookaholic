import React, {useState, useEffect} from 'react';
import { useStateValue } from '../Context/StateProvider';
import CheckoutItem from './CheckoutItem';
import '../../styles/css/Checkout.css';

function Checkout() {
    const [state, dispatch] = useStateValue();
    const [total, setTotal] = useState(0);

    const calcTotal = () => {
        let tp = 0;
        state.basket.map(book => {
            tp += parseInt(book.price);
        })
        setTotal(tp);
    }

    useEffect(() => {
        calcTotal();

    }, [state.basket])

    return (
        <div style={{marginTop: "70px"}} className="checkout">
            <div className="checkout__items">
                <h1>My Orders</h1>
                <div className="item">
                    {state.basket.map(item => ( 
                        <CheckoutItem 
                            id={item.id} 
                            price={item.price} 
                            name={item.name}
                            amount={item.amount}
                            /> ))}
                </div>
            </div>
            <div className="checkout__calc">
                <h1>Checkout Summary</h1>
                <div className="calc">
                        <div className="calc__item">
                            <div className="item__name">Subtotal</div> <div>৳ {total}</div>
                        </div>
                        <div className="calc__item">
                            <div className="item__name">Shipping</div> <div>৳ 50</div>
                        </div>
                        <div className="calc__item">
                            <div className="item__name">Total</div> <div>৳ {total + 50}</div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
