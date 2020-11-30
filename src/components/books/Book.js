import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";

function Book({ id, name, price, author }) {
    const [state, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                name: name,
                price: price,
            },
        });
    };

    const addToWishList = () => {
        dispatch({
            type: "ADD_TO_WISHLIST",
            item: {
                id: id,
                name: name,
                price: price,
                author: author,
            },
        });
    };

    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/br-bookaholic.appspot.com/o/BookImages%2F${id}.jpg?alt=media&token=6316abd8-eee5-4e16-a446-9c9ad9a2316d`;
    return (
        <div className="card">
            <div className="card__info">
                <div className="card__image">
                    <img src={imageUrl} alt="" height="100%" />
                </div>
                <Link to={`/details/${id}`} className="card__dark"></Link>
                <div className="card__option">
                    {state.authenticated ? (
                        <div className="one" onClick={addToCart}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-shopping-cart"
                            >
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                        </div>
                    ) : (
                        <Link className="one" to="/login">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-shopping-cart"
                            >
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                        </Link>
                    )}
                    <Link to={"/details/" + id} className="two">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-book-open"
                        >
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                    </Link>
                    <div className="three" onClick={addToWishList}>
                        <i className="far fa-heart"></i>
                    </div>
                </div>
                <div className="card__detail">
                    <h2 className="book__price">৳ {price}</h2>
                    <h3 className="book__title">{name}</h3>
                </div>
            </div>
        </div>
    );
}

export default Book;
