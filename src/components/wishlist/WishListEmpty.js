import React from "react";
import { Link } from "react-router-dom";
import bookShelf from "../../styles/images/checkout/emptyBox.svg";

function WishListEmpty() {
    return (
        <div className="wishlistEmpty">
            <img src={bookShelf} alt="Wish List is Empty" />
            <div className="text">
                <h3>Empty List</h3>
                <p>Looks like you don't make your wishlist yet</p>
                <Link to="/">
                    {" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-arrow-left"
                    >
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>{" "}
                    Go to homepage
                </Link>
            </div>
        </div>
    );
}

export default WishListEmpty;
