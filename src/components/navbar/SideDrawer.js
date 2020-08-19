import React from 'react'

const SideDrawer = props => {
    let drawerClass = 'side__drawer';
    if(props.show){
        drawerClass = 'side__drawer open'
    }
    return (
        <nav className={drawerClass}>
            <a className="navbar-brand" style={{textAlign: "center"}} href="/">eBookStore</a>
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">User</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer
