import React, { useState, useEffect } from 'react'
import './_index.scss'
import Accounts from '../../containers/accounts/Accounts'
import { useSelector } from 'react-redux'
import { selectUserData } from '../../selectors'
import Form from '../../components/updateForm/Form'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const user = useSelector(selectUserData);

    useEffect(() => {
        if (Object.keys(user.token).length === 0) {
            navigate("/login");
        }
    }, [navigate, user.token]);

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>{toggle === false ? (
                    <>Welcome back <br /> {user.firstName} {user.lastName}!</>
                ) : ("Edit user info")}
                </h1>
                <button onClick={() => setToggle(true)} className={toggle === true ? "hidden edit-button" : "edit-button"}>Edit Name</button>
                <Form isHeaderHidden={toggle} toggle={() => setToggle(false)} />
            </div>
            <Accounts />
        </main>
    );
}