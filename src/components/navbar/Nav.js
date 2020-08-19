import React from 'react'
import DrawerTogglerButton from './DrawerTogglerButton'
import { Link } from 'react-router-dom'

const Nav = props => {

    return (
        <header className="header">
            <nav className="navbar fixed-top">
                <DrawerTogglerButton click={props.drawerToggleClickHnadler}/>
                <a className="navbar-brand big-navbar-brand" href="/">Be Bookaholic</a>
                <div className="navbar__navigation-items m-auto">
                    <input type="text" className="search__field" placeholder="Search books" />
                    <button type="button"><i class="fas fa-search header__searchIcon"></i></button>
                </div>
                <div className="logo__box">
                    <Link className="sign__in" to='/login'>Login</Link>
                    <Link className="logo" to='/checkout'>
                        <i className="fas fa-shopping-bag"></i>
                        <div>12</div>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Nav
