import React, {useState} from 'react'
import DrawerTogglerButton from './DrawerTogglerButton'
import { Link } from 'react-router-dom'
import { useStateValue } from '../Context/StateProvider';
import { auth } from '../../firebase/util';
import defaultAvatar from '../../styles/images/avatar.svg';
import { BookDropdown, ProfileDropdown } from './Dropdown';

const Nav = props => {
    const [state, dispatch] = useStateValue();
    const [ bdropdown, setBDropdown ] = useState(false);
    const [ pdropdown, setPDropdown ] = useState(false);

    const logout = () => {
        auth.signOut().then(() => {
            dispatch({type: 'SET_LOGOUT'});
        })
    }

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
                        ? (
                            <div className="logo__box-user">
                                <div><img src={defaultAvatar} alt="avater" /></div>
                                <div className="text" onClick={() => setPDropdown(!pdropdown)}>
                                    {state.user.name}
                                </div>
                                {/* <div onClick={logout}>Logout</div> */}
                            </div>
                        )
                        : <Link className="sign__in" to='/login'>
                            <div className="logo__box-user">
                                <div className="icon"><i className="fas fa-plus"></i></div>
                                <div className="text" to='/login'>Join</div>
                            </div>
                        </Link>
                    }
                    <Link className="logo" to='/checkout'>
                        <i className="fas fa-shopping-bag"></i>
                        <div>{state.basket.length}</div>
                    </Link>
                    <div className="logo" onClick={() => setBDropdown(!bdropdown)}>
                        <i class="fas fa-caret-down"></i>
                    </div>
                </div>
            </nav>
            {bdropdown ? <BookDropdown /> : null}
            {pdropdown ? <ProfileDropdown /> : null}
        </header>
    )
}

export default Nav
