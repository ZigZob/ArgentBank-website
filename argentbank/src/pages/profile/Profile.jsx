import React, { useState } from 'react'
import './_index.scss'
import Accounts from '../../containers/accounts/Accounts'
import { useSelector } from 'react-redux'
import { selectUserData } from '../../selectors'
import Form from '../../components/updateForm/Form'
export default function Profile() {
    const [toggle, setToggle] = useState(false)
    const user = useSelector(selectUserData)
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>{toggle === false ? (
                    <>Welcome back <br /> {user.firstName} {user.lastName}!</>)
                    : ("Edit user info")}
                </h1>
                <button onClick={() => setToggle(true)} className={toggle === true ? "hidden edit-button" : "edit-button"}>Edit Name</button>
                <Form isHeaderHidden={toggle} toggle={() => setToggle(false)} />
            </div>
            <Accounts />
        </main>
    )
}