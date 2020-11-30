import React from "react";

const DrawerTogglerButton = (props) => {
    return (
        <button className="btn__toggler" onClick={props.click}>
            <div className="btn__toggler-line"></div>
            <div className="btn__toggler-line"></div>
            <div className="btn__toggler-line"></div>
        </button>
    );
};

export default DrawerTogglerButton;
