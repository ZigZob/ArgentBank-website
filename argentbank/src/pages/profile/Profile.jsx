import React from 'react'
import './_index.scss'
import Account from '../../components/account/Account'
import { useSelector } from 'react-redux'
import { selectUserData } from '../../selectors'

export default function Profile() {
    const user = useSelector(selectUserData)

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="2,082.79" amountDesc="Available Balance" />
            <Account title="Argent Bank Savings (x6712)" amount="10,928.42" amountDesc="Available Balance" />
            <Account title="Argent Bank Credit Card (x8349)" amount="184.30" amountDesc="Current Balance" />
        </main>
    )
}