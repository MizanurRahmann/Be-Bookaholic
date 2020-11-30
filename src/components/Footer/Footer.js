import React from "react";
import { Link } from "react-router-dom";
import "../../styles/css/Footer.css";
import logo from "../../styles/images/brain.svg";

function Footer() {
    return (
        <div className="footer">
            <div className="left_block">
                <div className="logo_block">
                    <img src={logo} alt="svg logo" />
                    <div className="name">
                        <span>be</span> Bookaholic
                    </div>
                </div>
                <p>
                    Copyright &copy; 2020 by <spn>Mizanur Rahman</spn>
                </p>
                <Link to="/">Terms of service | </Link>
                <Link to="/">Privacy Policy</Link>
            </div>

            <div className="right_block">
                <div className="items">
                    <h3>Products</h3>
                    <Link to="/">Fiction</Link>
                    <Link to="/">Non Fiction</Link>
                    <Link to="/">Classic</Link>
                    <Link to="/">Islamik</Link>
                    <Link to="/">Historic</Link>
                </div>
                <div className="items">
                    <h3>About</h3>
                    <Link to="/">About beBookaholic</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/">Features</Link>
                    <Link to="/">Policy</Link>
                </div>
                <div className="items">
                    <h3>Resource</h3>
                    <Link to="/">Help center</Link>
                    <Link to="/">Book a demo</Link>
                    <Link to="/">Server status</Link>
                    <Link to="/">Demo</Link>
                </div>
                <div className="items">
                    <h3>Get in touch</h3>
                    <p>Question or feedback?</p>
                    <p>We would like to hear you from</p>
                    <div className="social_link">
                        <div className="link">
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
                                class="feather feather-facebook"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </div>
                        <div className="link">
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
                                class="feather feather-twitter"
                            >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </div>
                        <div className="link">
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
                                class="feather feather-linkedin"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
