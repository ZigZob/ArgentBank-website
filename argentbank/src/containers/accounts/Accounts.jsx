import React from "react";
import './_index.scss'
import Account from "../../components/account/Account";

const dataSet = [
    {
        title: "Argent Bank Checking (x8349)",
        amount: "2,082.79",
        amountDesc: "Available Balance"
    },
    {
        title: "Argent Bank Savings (x6712)",
        amount: "10,928.42",
        amountDesc: "Available Balance"
    }, {
        title: "Argent Bank Credit Card (x8349)",
        amount: "184.30",
        amountDesc: "Current Balance"
    }
]

export default function Accounts() {
    return (
        <>
            <h2 className="sr-only">Accounts</h2>
            {dataSet.map((data, index) => (
                <Account
                    key={index}
                    title={data.title}
                    amount={data.amount}
                    amountDesc={data.amountDesc}
                />
            ))}
        </>
    )
}