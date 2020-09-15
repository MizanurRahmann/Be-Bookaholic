import React, { useState } from 'react'

function CheckoutItem(props) {
    const [price, setPrice] = useState(props.price);
    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/br-bookaholic.appspot.com/o/BookImages%2F${props.id}.jpg?alt=media&token=6316abd8-eee5-4e16-a446-9c9ad9a2316d`;

    return (
        <div className="item__detail">
            <div className="item__image">
                <img src={imageUrl} alt="book"/>
            </div>
            <div className="item__name">{props.name}</div>
            <div className="item__price">৳ {props.price}</div>
            <div className="item__quantity">
            <div className="amount">{props.amount}</div>
                <div className="amount__controller">
                    <div> + </div>
                    <div> - </div>
                </div>
            </div>
            <div className="item__total">৳ {props.amount * props.price}</div>
            <div className="item__delete-btn"><i class="fas fa-times"></i></div>

        </div>
    )
}

export default CheckoutItem
