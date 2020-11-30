import React, { useEffect } from "react";
import { useStateValue } from "../Context/StateProvider";
import "../../styles/css/Wishlist.css";

// Components
import WishListItem from "./WishListItem";
import WishListEmpty from "./WishListEmpty";

function Wishlist() {
    const [state, dispatch] = useStateValue();

    //Delete from wishlist
    const deleteItem = (id) => {
        dispatch({
            type: "REMOVE_FROM_WISHLIST",
            itemId: id,
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="wishlist">
            <h1>My Wishlist</h1>
            <div className="items">
                {state.wishlist.length > 0 ? (
                    state.wishlist.map((item) => (
                        <WishListItem
                            key={item.id}
                            id={item.id}
                            price={item.price}
                            name={item.name}
                            author={item.author}
                            deleteItem={deleteItem}
                        />
                    ))
                ) : (
                    <WishListEmpty />
                )}
            </div>
        </div>
    );
}

export default Wishlist;
