import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';

function Book({id, name, price}) {
    const [{basket}, dispatch] = useStateValue();
    
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                name: name,
            }
        })
    }

    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/br-bookaholic.appspot.com/o/BookImages%2F${id}.jpg?alt=media&token=6316abd8-eee5-4e16-a446-9c9ad9a2316d`;
    return (
        <div to="/details" className="card">
            <Link to='/' className="card__info">
                <div className="card__image">
                    <img src={imageUrl} alt={name} height="100%"/>
                </div>
                <div className="card__option">
                    <div className="one" onClick={addToCart}><i className="fas fa-cart-arrow-down"></i></div>
                    <div className="two"><i className="fas fa-book-open"></i></div>
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