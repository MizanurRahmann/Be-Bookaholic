import React, { useState, useEffect } from "react";
import { useStateValue } from "../Context/StateProvider";

function AddressForm({ count, setCount }) {
    const [state, dispatch] = useStateValue();
    const [village, setVillage] = useState("");
    const [thana, setThana] = useState("");
    const [district, setDistrict] = useState("");
    const [division, setDivision] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        setVillage(state.userAddress.Village);
        setThana(state.userAddress.Thana);
        setDistrict(state.userAddress.District);
        setDivision(state.userAddress.Division);
        setPhone(state.userAddress.Phone);
    }, [state]);

    const personalInformationSubmit = (e) => {
        e.preventDefault();
        setCount(count + 1);
        console.log(`${village}, ${thana}, ${district}, ${division}, ${phone}`);
    };

    return (
        <form>
            <h1>Shipping Address</h1>
            <div className="formItems">
                <div className="formItem">
                    <label>Village</label>
                    <br />
                    <input
                        className="form-field"
                        type="text"
                        value={village}
                        onChange={(e) => setVillage(e.target.value)}
                    />
                </div>
                <div className="formItem">
                    <label>Thana</label>
                    <br />
                    <input
                        className="form-field"
                        type="text"
                        value={thana}
                        onChange={(e) => setThana(e.target.value)}
                    />
                </div>
            </div>
            <div className="formItems">
                <div className="formItem">
                    <label>District</label>
                    <br />
                    <input
                        className="form-field"
                        type="text"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                    />
                </div>
                <div className="formItem">
                    <label>Division</label>
                    <br />
                    <input
                        className="form-field"
                        type="text"
                        value={division}
                        onChange={(e) => setDivision(e.target.value)}
                    />
                </div>
            </div>
            <div className="formItem phone">
                <label>Phone</label>
                <br />
                <input
                    className="form-field"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <button
                onClick={personalInformationSubmit}
                type="button"
                className="submit"
            >
                Next Step
            </button>
        </form>
    );
}

export default AddressForm;
