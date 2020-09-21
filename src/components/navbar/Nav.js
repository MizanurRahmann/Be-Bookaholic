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

    //For signout operation
    const logout = () => {
        auth.signOut().then(() => {
            dispatch({type: 'SET_LOGOUT'});
        })
    }
    
    //For dropdown menu
    const categoryShow = () => { setBDropdown(!bdropdown); setPDropdown(false); }
    const profileShow = () => { setPDropdown(!pdropdown); setBDropdown(false); }

    
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
                            <div className="logo__box-user" onClick={props.toogleProfileOption}>
                                <div className="text">{state.user.name}</div>
                                <div><img src={defaultAvatar} alt="avater" /></div>
                            </div>
                        )
                        : <Link className="sign__in" to='/login'>
                            <div className="logo__box-user">
                                <div className="text" to='/login'>Join</div>
                                <div className="icon"><i className="fas fa-plus"></i></div>
                            </div>
                        </Link>
                    }
                    <Link className="logo" to='/checkout'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        <div>{state.basket.length}</div>
                    </Link>
                    <div className="logo" onClick={props.toggleBookListOption}>
                        <i class="fas fa-caret-down"></i>
                    </div>
                </div>
            </nav>
            {bdropdown ? <BookDropdown classLists={"dropdown-up"} /> : null}
            {pdropdown ? <ProfileDropdown logout={logout} /> : null}
        </header>
    )
}

export default Nav
