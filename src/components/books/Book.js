import React from 'react';
import { Link} from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';

function Book({ id, name, price }) {
    const [state, dispatch] = useStateValue();

    const addToCart = () => {
        let found = false;

        //Check book is in basket?
        state.basket.map(book => {
            if(book.id === id){
                book.amount++;
                found = true;
            }
        })

        //If it is not found the add to basket
        if(!found){
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    name: name,
                    price: price,
                    amount: 1
                }
            })
        }
    }


    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/br-bookaholic.appspot.com/o/BookImages%2F${id}.jpg?alt=media&token=6316abd8-eee5-4e16-a446-9c9ad9a2316d`;
    return (
        <div to="/details" className="card">
            <Link to='/' className="card__info">
                <div className="card__image">
                    <img src={imageUrl} alt={name} height="100%" />
                </div>
                <div className="card__option">
                    {
                        state.authenticated 
                        ? <div className="one" onClick={addToCart}><i className="fas fa-cart-arrow-down"></i></div>
                        : <Link className="one" to='/login' ><i className="fas fa-cart-arrow-down"></i></Link>
                    }
                    <Link to={"/details/" + id} className="two"><i className="fas fa-book-open"></i></Link>
                    <div className="three"><i className="far fa-heart"></i></div>
                </div>
                <div className="card__detail">
                    <h2 className="book__price">৳ {price}</h2>
                    <h3 className="book__title">{name}</h3>
                </div>
            </Link>
        </div>
    )
}

export default Book