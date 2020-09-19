import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from "react-loading-skeleton";

function BooksSkeleton() {

    return (
        <div to="/details" className="card">
            <Link to='/' className="card__info">
                <div className="card__image">
                    <Skeleton width={`100%`} height={320} duration={3}/>
                </div>
                <div className="card__detail">
                <Skeleton width={`100%`} height={40} />
                </div>
            </Link>
        </div>
    )
}

export default BooksSkeleton
