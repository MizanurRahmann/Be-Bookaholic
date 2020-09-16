import React from 'react'

function CheckoutItem(props) {
    const {id, name, price, amount} = props;
    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/br-bookaholic.appspot.com/o/BookImages%2F${props.id}.jpg?alt=media&token=6316abd8-eee5-4e16-a446-9c9ad9a2316d`;

    const itemIncrease = () => { props.increaseItem(props.id); }
    const itemDecrease = () => { props.decreaseItem(props.id); }
    const itemDelete = () => { props.deleteItem(props.id) };

    return (
        <div className="item__detail">
            <div className="item__image">
                <img src={imageUrl} alt="book"/>
            </div>
            <div className="item__name">{name}</div>
            <div className="item__price">৳ {price}</div>
            <div className="item__quantity">
            <div className="amount">{amount}</div>
                <div className="amount__controller">
                    <div onClick={itemIncrease}> + </div>
                    <div onClick={itemDecrease}> - </div>
                </div>
            </div>
            <div className="item__total">৳ {amount * price}</div>
            <div className="item__delete-btn"><i className="fas fa-times"></i></div>

        </div>
    )
}

export default CheckoutItem
