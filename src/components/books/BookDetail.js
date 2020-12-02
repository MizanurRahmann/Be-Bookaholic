import React, { useState, useEffect } from "react";
import { db } from "../../firebase/util";
import { useStateValue } from "../Context/StateProvider";
import { Link } from "react-router-dom";
import BookLoading from "./BookLoading";

function BookDetail(props) {
    const BOOK_ID = props.match.params.id;
    const IMAGE_URL = `https://firebasestorage.googleapis.com/v0/b/br-bookaholic.appspot.com/o/BookImages%2F${BOOK_ID}.jpg?alt=media&token=6316abd8-eee5-4e16-a446-9c9ad9a2316d`;
    const [book, setBook] = useState({});
    const [state, dispatch] = useStateValue();
    const [viewHandler, setViewHandler] = useState(true);
    const [loading, setLoading] = useState(false);

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: BOOK_ID,
                name: book.name,
                price: book.price,
            },
        });
    };

    const shortView = (description) => {
        return (
            description &&
            description.replace(/(([^\s]+\s\s*){50})(.*)/, "$1....")
        );
    };

    useEffect(() => {
        setLoading(true);

        const BOOK_REF = db.collection("Books").doc(BOOK_ID);
        BOOK_REF.get()
            .then((doc) => {
                if (doc.exists) setBook(doc.data());
                else console.log("No such document!");
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.message);
                setLoading(false);
            });
    }, [BOOK_ID, viewHandler]);

    if (loading)
        return (
            <div className="loadingTemplate">
                <BookLoading />
            </div>
        );

    return (
        <div className="book__details">
            <div className="book__image-block">
                <div className="frame">
                    <div className="page cover">
                        <img src={IMAGE_URL} alt="bookImage" />
                    </div>
                    <div className="page page1"></div>
                    <div className="page page2"></div>
                    <div className="page page3"></div>
                </div>
            </div>
            <div className="book__info-block">
                <h1 className="name">{book.name}</h1>
                <h3 className="author">{book.author}</h3>
                <div className="ratting">
                    {Array(book.ratting)
                        .fill()
                        .map((_) => (
                            <i
                                className="fas fa-star"
                                style={{ color: "#FDCC0D" }}
                            ></i>
                        ))}
                    {Array(book.ratting && 5 - book.ratting)
                        .fill()
                        .map((_) => (
                            <i
                                className="far fa-star"
                                style={{ color: "#444" }}
                            ></i>
                        ))}
                    <div className="ratting__count">
                        <i class="fas fa-share-alt"></i> 230
                    </div>
                </div>
                <div className="description">
                    {viewHandler
                        ? shortView(book.description)
                        : book.description}
                    {viewHandler ? (
                        <span onClick={() => setViewHandler(false)}>More</span>
                    ) : (
                        <span onClick={() => setViewHandler(true)}>Less</span>
                    )}
                </div>
                <div className="price">
                    <span>{`${book.less && book.less}%`}</span>
                    <strike>৳ {book.price}</strike>৳
                    {Math.floor(book.price - (book.price * book.less) / 100)}
                </div>

                <div className="others-info">
                    <div className="heading">Publisher</div>
                    <div className="info">{book.publisher}</div>
                </div>
                <div className="others-info">
                    <div className="heading">Cattegories</div>
                    <div className="info">
                        {book.categories && book.categories.join(", ")}
                    </div>
                </div>
                <div className="others-info">
                    <div className="heading">Pages</div>
                    <div className="info">{book.pages}p</div>
                </div>
                <div className="others-info">
                    <div className="heading">Country</div>
                    <div className="info">{book.country}</div>
                </div>
                <div className="others-info">
                    <div className="heading">Languages</div>
                    <div className="info">{book.language}</div>
                </div>
                {!state.basket.find((elemnet) => elemnet.id === BOOK_ID) ? (
                    state.authenticated ? (
                        <div className="btn_block">
                            <div className="addToCart" onClick={addToCart}>
                                Add to Cart
                            </div>
                            <div className="addTowishlist">
                                <i class="far fa-heart"></i> Add to wishlist
                            </div>
                        </div>
                    ) : (
                        <div className="btn_block">
                            <Link className="addToCart" to="/login">
                                Add to Cart
                            </Link>
                            <Link className="addTowishlist" to="/login">
                                <i class="far fa-heart"></i> Add to wishlist
                            </Link>
                        </div>
                    )
                ) : (
                    <div className="btn_block">
                        <div className="addedToCart">Added to Cart</div>
                        <div className="addTowishlist">
                            <i class="far fa-heart"></i> Add to wishlist
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookDetail;
