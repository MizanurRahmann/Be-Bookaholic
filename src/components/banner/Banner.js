import React from 'react'
import bannerImage from '../../styles/images/bannerImage/human1.png';

function Banner() {
    return (
        <div className="banner">
            <div className="banner__text">
                <div className="banner__heading">
                    <h1>Be <span>Bookaholic,</span></h1>
                    <h2>Be Awsome</h2>
                </div>
            </div>
            <div className="banner__image">
                <img src={bannerImage} alt="humaaans" />
            </div>
        </div>
    )
}

export default Banner