import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav className="main-nav">
                <Link className="main-nav__logo" to="/">
                    <img
                        className="main-nav__logoImg"
                        src="../../../public/argentBankLogo.webp"
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav__item" to="/signup">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            </nav>
        </>
    )
}