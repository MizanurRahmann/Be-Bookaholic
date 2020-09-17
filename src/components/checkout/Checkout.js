import React, {useState, useEffect} from 'react';
import { useStateValue } from '../Context/StateProvider';
import { Link } from 'react-router-dom';
import CheckoutItem from './CheckoutItem';
import '../../styles/css/Checkout.css';
import notFoundImage from '../../styles/images/note.png'

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
                <div className="ideleteItemtem">
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
                                <img src={notFoundImage} alt="notfound" height="70%"/>
                                <h2>Sorry, you dont have any book in your cart. 
                                    <Link to='/'> Want to buy some books?</Link>
                                </h2>
                            </div>
                    }
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
                            <div className="item__name">Total</div> <div>৳ {total ? total + 50 : 0}</div>
                        </div>
                        <div className="calc__item">
                            <div className="item__name">Payable total</div>
                            <div style={{fontWeight: "600"}}>৳ {total ? total + 50 : 0}</div>
                        </div>
                        <div className="gotoShipping">
                            <Link to='/' className="btn-shipping">Go to shipping page</Link>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
