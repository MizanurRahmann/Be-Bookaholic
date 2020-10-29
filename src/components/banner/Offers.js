import React from 'react';
import All from '../../styles/images/offerImage/All.png';
import offer5 from '../../styles/images/offerImage/offer5.png';
import { Link } from 'react-router-dom';

function Offers() {
    return (
        <React.Fragment>
            <div className="row offers">
                {/* block one */}
                <div className="col-md-6 offer">
                    <div className="block__one">
                        <div className="image"><img src={All} width="100%" alt="ADD"/></div>
                        <div className="details">
                            <h1>Find Books <span>for All Ages</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit met condimentum estibulum issim.</p>
                            <Link to="/" className="purchase">Purchase <span className="arrow"> <i className="fas fa-arrow-right"></i> </span></Link>
                        </div>
                    </div>
                </div>
                {/* block two */}
                <div className="col-md-3 offer"><div className="block__two"></div></div>
                {/* block three */}
                <div className="col-md-3 offer"> <div className="block__three"> </div></div>
            </div>

            <div className="row offers">
                {/* block four */}
                <div className="col-md-3 offer"> <div className="block__four"></div> </div>
                {/* block five */}
                <div className="col-md-6 offer">
                    <div className="block__five">
                        <div className="details">
                            <h1>PUSH BACK</h1>
                            <h2><span>by</span> R. E. McDERMOTT</h2>
                            <Link to="/" className="purchase">Purchase <span className="arrow"> <i className="fas fa-arrow-right"></i> </span></Link>
                        </div>
                        <div className="image"><img src={offer5} width="100%" alt="ADD"/></div>
                    </div>
                </div>
                {/* block six */}
                <div className="col-md-3 offer"> <div className="block__six"></div> </div>
            </div>
        </React.Fragment>
    )
}

export default Offers
