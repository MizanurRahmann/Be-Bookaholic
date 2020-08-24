import React from 'react';
import All from '../../styles/images/offerImage/All.png';
import { Link } from 'react-router-dom';

function Offers() {
    return (
        <React.Fragment>
            <div className="row offers">
                
                <div className="col-md-6 offer">
                    <div className="block__one">
                        <div className="image"><img src={All} width="100%"/></div>
                        <div className="details">
                            <h1>Find Books <span>for All Ages</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit met condimentum estibulum issim Lorem ipsum dolor sit amet, consectetur cing elit scipit sagittis leo sit met condi.</p>
                            <Link>Purchase</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 offer">
                    <div className="block__two">
                        <div className="border">
                            <div className="details">
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 offer">
                    <div className="block__three">
                        <div className="details">
                            <div className="details__text">
                                <h1>Classic Books</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Offers
