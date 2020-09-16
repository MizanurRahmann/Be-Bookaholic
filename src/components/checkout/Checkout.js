import React, {useState, useEffect} from 'react';
import { useStateValue } from '../Context/StateProvider';
import CheckoutItem from './CheckoutItem';
import '../../styles/css/Checkout.css';

function Checkout() {
    const [state, dispatch] = useStateValue();
    const [total, setTotal] = useState(0);

    //Calculate total cost for basket items
    const calcTotal = () => {
        let tp = 0;
        state.basket.map(book => {
            tp += book.amount * parseInt(book.price);
        })
        setTotal(tp);
    };

    //Delete from basket
    const deleteItem = id => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: { id: id }
        })
    }

    //Increase a item
    const increaseItem = id => {
        state.basket.map(book => {
            if(book.id === id){
                book.amount++;
                calcTotal();
            }
        })
    };

    //Deccrease a item
    const decreaseItem = id => {
        state.basket.map(book => {
            if(book.id === id && book.amount > 0){
                book.amount--;
                calcTotal();
            }
            if(book.amount == 0){
                deleteItem();
            }
        })
    };

    //Calculate total if any kind of basket value changed
    useEffect(() => {
        calcTotal();
    }, [JSON.stringify(state.basket)])


    return (
        <div style={{marginTop: "70px"}} className="checkout">
            <div className="checkout__items">
                <h1>My Orders</h1>
                <div className="ideleteItemtem">
                    {state.basket.map(item => ( 
                        <CheckoutItem
                            key={item.id}
                            id={item.id} 
                            price={item.price} 
                            name={item.name}
                            amount={item.amount}
                            increaseItem={increaseItem}
                            decreaseItem={decreaseItem}
                            deleteItem = {deleteItem}
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
