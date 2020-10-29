import React from 'react';
import { useStateValue } from '../Context/StateProvider';
import WishListItem from './WishListItem';
import '../../styles/css/Wishlist.css'

function Wishlist() {
    const [state, dispatch] = useStateValue();

    //Delete from wishlist
    const deleteItem = id => {
        dispatch({
            type: 'REMOVE_FROM_WISHLIST',
            itemId: id
        })
    }

    return (
        <div className="wishlist">
            <h1>My Wishlist</h1>
            <div className="items">
            {
                state.wishlist.length > 0
                ? state.wishlist.map(item => (
                    
                    <WishListItem
                        key={item.id}
                        id={item.id} 
                        price={item.price} 
                        name={item.name}
                        author={item.author}
                        deleteItem={deleteItem}
                    />
                ))
                : "nai."
            }
            </div>
        </div>
    )
}

export default Wishlist
