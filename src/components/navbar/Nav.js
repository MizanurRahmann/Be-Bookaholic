import React from 'react'
import DrawerTogglerButton from './DrawerTogglerButton'
import { Link } from 'react-router-dom'
import { useStateValue } from '../Context/StateProvider';

const Nav = props => {
    const [state] = useStateValue();

    return (
        <header className="header">
            <nav className="navbar fixed-top">
                <DrawerTogglerButton click={props.drawerToggleClickHnadler}/>
                <a className="navbar-brand big-navbar-brand" href="/">Be Bookaholic</a>
                <div className="navbar__navigation-items m-auto">
                    <input type="text" className="search__field" placeholder="Search books" />
                    <button type="button"><i className="fas fa-search header__searchIcon"></i></button>
                </div>
                <div className="logo__box">
                    {
                        state.authenticated
                        ? <Link className="sign__in" to='/login'>{state.user.name}</Link>
                        : <Link className="sign__in" to='/login'>Login</Link>
                    }
                    <Link className="logo" to='/checkout'>
                        <i className="fas fa-shopping-bag"></i>
                        <div>{state.basket.length}</div>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Nav
