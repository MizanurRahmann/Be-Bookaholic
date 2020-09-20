import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function BookDropdown() {
    
    return (
        <div className="dropdown">
            <ul>
                <li><Link>Classic</Link></li>
                <li><Link>Fiction</Link></li>
                <li><Link>Non Fiction</Link></li>
                <li><Link>Islamik</Link></li>
            </ul>
        </div>
    )
}

function ProfileDropdown() {
    
    return (
        <div className="dropdown">
            <ul>
                <li><Link>Profile</Link></li>
                <li><Link>Wish List</Link></li>
                <li><Link>Logout</Link></li>
            </ul>
        </div>
    )
}

export  {BookDropdown, ProfileDropdown};
