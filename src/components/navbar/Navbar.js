import React, {useState} from 'react'
import Nav from './Nav';
import SideDrawer from './SideDrawer';
import BackDrop from './BackDrop';
import '../../styles/css/Navbar.css';


function Navbar() {
    const [state, setstate] = useState(false)
    
    const drawerToggleClickHnadler = () => { setstate(!state); }
    const backDropHandler = () => { setstate(false); }

    return (
        <React.Fragment>
            <Nav drawerToggleClickHnadler={drawerToggleClickHnadler} />
            <SideDrawer show={state}/>
            {state ? <BackDrop click={backDropHandler}/> : null}
        </React.Fragment>
    )
}

export default Navbar
