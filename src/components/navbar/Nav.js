import React from "react";
import DrawerTogglerButton from "./DrawerTogglerButton";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import defaultAvatar from "../../styles/images/avatar.svg";
import { auth } from "../../firebase/util";

const Nav = (props) => {
    const [state, dispatch] = useStateValue();

    return (
        <header className="header">
            <nav className="navbar fixed-top">
                <DrawerTogglerButton click={props.drawerToggleClickHnadler} />
                <Link className="navbar-brand big-navbar-brand" to="/">
                    be <span>Bookaholic</span>
                </Link>

                <div className="navbar__navigation-items m-auto">
                    <input
                        type="text"
                        className="search__field"
                        placeholder="Search books"
                    />
                    <button type="button">
                        <i className="fas fa-search header__searchIcon"></i>
                    </button>
                </div>

                <div className="logo__box">
                    {state.authenticated ? (
                        <div
                            className="logo__box-user"
                            onClick={props.toogleProfileOption}
                        >
                            <div className="text">{state.user.name}</div>
                            {auth.currentUser.photoURL ? (
                                <div>
                                    <img
                                        src={state.user.imageURL}
                                        alt="avater"
                                    />
                                </div>
                            ) : (
                                <div>
                                    <img src={defaultAvatar} alt="avater" />
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login">
                            <div className="logo__box-user">
                                <div className="text">Join</div>
                                <div className="icon">
                                    <i className="fas fa-plus"></i>
                                </div>
                            </div>
                        </Link>
                    )}

                    <Link
                        className="logo cart"
                        to="/checkout"
                        onClick={props.backDropHandler}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            strokeLineJoin="round"
                            class="feather feather-shopping-cart"
                        >
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        {state.basket.length > 0 ? (
                            <div>{state.basket.length}</div>
                        ) : null}
                    </Link>

                    <div
                        className="logo books"
                        onClick={props.toggleBookListOption}
                    >
                        <i className="fas fa-caret-down"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
