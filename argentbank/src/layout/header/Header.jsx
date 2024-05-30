import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserName } from '../../selectors'
import { resetUserData } from '../../store/slices/userSlice'
export default function Header() {
    const userName = useSelector(selectUserName)
    const dispatch = useDispatch()
    return (
        <nav className="main-nav">
            <Link className="main-nav__logo" to="/">
                <img
                    className="main-nav__logoImg"
                    src="./argentBankLogo.webp"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {userName && Object.keys(userName).length > 0 ?
                    <>
                        <Link className="main-nav__item" to="/profile">
                            <i className="fa fa-user-circle"></i>{userName}
                        </Link>
                        <Link onClick={() => dispatch(resetUserData())} className="main-nav__item" to="/">
                            <i className="fa-solid fa-right-from-bracket"></i>Sign Out
                        </Link>
                    </>
                    :
                    <Link className="main-nav__item" to="/login">
                        <i className="fa fa-user-circle"></i>Sign In
                    </Link>
                }
            </div>
        </nav>
    )
}