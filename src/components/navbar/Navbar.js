import React, {useState} from 'react'
import Nav from './Nav';
import SideDrawer from './SideDrawer';
import BackDrop from './BackDrop';
import '../../styles/css/Navbar.css';
import { BookDropdown, ProfileDropdown } from './Dropdown';
import { auth } from '../../firebase/util';
import { useStateValue } from '../Context/StateProvider';


function Navbar() {
    const [states, dispatch] = useStateValue();
    const [state, setstate] = useState(false);
    const [bookList, setBookList] = useState(false);
    const [profileOption, setProfileOption] = useState(false);
    
    const drawerToggleClickHnadler = () => { setstate(!state); };
    const toggleBookListOption = () => { setBookList(!bookList); setProfileOption(false);};
    const toogleProfileOption = () => { setProfileOption(!profileOption); setBookList(false)};
    const backDropHandler = () => { setstate(false); }
    const clearOptions = () => { setBookList(false); setProfileOption(false); };

    //For signout operation
    const logout = () => {
        auth.signOut().then(() => {
            dispatch({type: 'SET_LOGOUT'});
        })
        //close draer
        clearOptions();
    }

    return (
        <React.Fragment>
            <Nav 
                drawerToggleClickHnadler={drawerToggleClickHnadler} 
                toggleBookListOption={toggleBookListOption}
                toogleProfileOption={toogleProfileOption}
            />
            <SideDrawer show={state}/>
            <BookDropdown show={bookList} clear={clearOptions}/>
            <ProfileDropdown show={profileOption} logout={logout} clear={clearOptions}/>
            { state ? <BackDrop click={backDropHandler} dropdown={false} drawer={true}/> : null }
            {
                bookList || profileOption 
                ? <BackDrop click={clearOptions} dropdown={true} drawer={false}/>
                : null
            }
            
        </React.Fragment>
    )
}

export default Navbar
