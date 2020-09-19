import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/util';

function BookDetail(props) {
    const BOOK_ID = props.match.params.id;
    const IMAGE_URL = `https://firebasestorage.googleapis.com/v0/b/br-bookaholic.appspot.com/o/BookImages%2F${BOOK_ID}.jpg?alt=media&token=6316abd8-eee5-4e16-a446-9c9ad9a2316d`;
    const [book, setBook] = useState({});

    useEffect(() => {
        const BOOK_REF = db.collection('Books').doc(BOOK_ID);

        BOOK_REF.get()
            .then(doc => {
                if (doc.exists) setBook(doc.data());
                else console.log("No such document!");
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [])


    return (
        <div className="book__details">
            <div className="book__image-block">
                <img src={IMAGE_URL} alt="bookImage" />
            </div>
            <div className="book__info-block">
                <h1 className="name">{book.name}</h1>
                <h3 className="author">{book.author}</h3>
                <div className="ratting">
                    {Array(book.ratting)
                        .fill()
                        .map((_) => (
                            <i className="fas fa-star" style={{color: "#FDCC0D"}}></i>
                        ))
                    }
                    {Array(book.ratting && (5 - book.ratting))
                        .fill()
                        .map((_) => (
                        <i className="far fa-star" style={{color: "#444"}}></i>
                        ))
                    }
                    <div className="ratting__count">
                        <i class="fas fa-share-alt"></i> 230
                    </div>
                </div>
                <div className="description">
                    { book.description 
                        && book.description.replace(/(([^\s]+\s\s*){50})(.*)/,"$1....")}
                </div>
                <div className="price">
                    <span>{`${book.less && book.less}%`}</span> 
                    <strike>৳ {book.price}</strike> 
                    ৳{book.price - (book.price * book.less/100)}
                </div>

                <div className="others-info">
                    <div className="heading">Publisher</div>
                    <div className="info">{book.publisher}</div>
                </div>
                <div className="others-info">
                    <div className="heading">Cattegories</div>
                    <div className="info">{book.categories && book.categories.join(", ")}</div>
                </div>
                <div className="others-info">
                    <div className="heading">Pages</div>
                    <div className="info">{book.pages}</div>
                </div>
                <div className="others-info">
                    <div className="heading">Country</div>
                    <div className="info">{book.country}</div>
                </div>
                <div className="others-info">
                    <div className="heading">Languages</div>
                    <div className="info">{book.language}</div>
                </div>

                <div className="addToCart">Add to Cart</div>
            </div>
        </div>
    )
}

export default BookDetail
