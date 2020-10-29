import React from 'react'

function WishListItem(props) {
    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/br-bookaholic.appspot.com/o/BookImages%2F${props.id}.jpg?alt=media&token=6316abd8-eee5-4e16-a446-9c9ad9a2316d`;
    const itemDelete = () => { props.deleteItem(props.id) };
    
    return (
        <div className="item">
            <div className="item__image">
                <img src={imageUrl} alt="book"/>
            </div>
            <div className="item__name">
                <p>{props.name}</p>
                <small>{props.author}</small>
            </div>
            <div className="item__price">৳ {props.price}</div>
            <div className="item__add-btn">
                Add to cart
            </div>
            <div className="item__delete-btn" onClick={itemDelete}>
                <i className="fas fa-times"></i>
            </div>
        </div>
    )
}

export default WishListItem
