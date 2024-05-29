import React from "react";
import './_index.scss'

export default function Account({ title, amount, amountDesc }) {
    return (
        <section className="account">
            <div className="account__contentWrapper">
                <h3 className="account__title">{title}</h3>
                <p className="account__amount">${amount}</p>
                <p className="account__amountDescription">{amountDesc}</p>
            </div>
            <div className="account__contentWrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}
