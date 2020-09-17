import React, {useState, useEffect} from 'react';
import { useStateValue } from '../Context/StateProvider';
import { Link } from 'react-router-dom';
import CheckoutItem from './CheckoutItem';
import '../../styles/css/Checkout.css';
import notFoundImage from '../../styles/images/checkout/note.png';
import truck from '../../styles/images/checkout/shipping.png';

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
        state.total = tp;
    };
    console.log(state.total);

    //Delete from basket
    const deleteItem = id => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            itemId: id
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
                deleteItem(id);
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
                <div className="items">
                    {state.basket.length > 0
                        ? state.basket.map(item => ( 
                            <CheckoutItem
                                key={item.id}
                                id={item.id} 
                                price={item.price} 
                                name={item.name}
                                amount={item.amount}
                                increaseItem={increaseItem}
                                decreaseItem={decreaseItem}
                                deleteItem = {deleteItem}
                                /> ))
                            : <div className="notFound__block">
                                <img src={notFoundImage} alt="notfound"/>
                                <h2>Sorry, you dont have any book in your cart. 
                                    <Link to='/'> Want to buy some books?</Link>
                                </h2>
                            </div>
                    }
                </div>
            </div>
            <div className="checkout__calc">
                <h1>Checkout Summary</h1>
                <div className="checkout__add">
                    <img src= {truck} alt="delivery-truck" />
                    <div className="checkout__add-text">
                        <h3>to get <span>15%</span> offer</h3>
                        <p>buy books more than <span>৳1000</span></p>
                    </div>
                </div>
                <div className="calc">
                    <div className="calc__item">
                        <div className="item__name">Subtotal</div> <div>৳ {total}</div>
                    </div>
                    <div className="calc__item">
                        <div className="item__name">Shipping</div> <div>৳ 50</div>
                    </div>
                    <div className="calc__item">
                        <div className="item__name">Total</div>
                        <div className="totalCost">
                            {
                                total >= 1000
                                ? <h4><span> -15% </span>৳ {(total - total * 0.15) + 50} </h4>
                                : <h4>৳ {total ? total + 50 : 0} </h4>
                            }
                        </div>
                    </div>
                    <Link to='/' className="btn-shipping">Go to shipping page</Link>
                </div>
            </div>
        </div>
    )
}

export default Checkout
