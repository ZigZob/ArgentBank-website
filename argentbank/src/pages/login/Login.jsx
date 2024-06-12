import React, { useState } from 'react'
import './_index.scss'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/slices/userSlice';

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function handleSubmit(e) {
        e.preventDefault();
        const resultAction = await dispatch(loginUser({ email, password }));
        if (loginUser.fulfilled.match(resultAction)) {
            navigate("/profile");
        } else {
            alert(resultAction.payload || 'Failed to login');
        }
    }

    return (
        <main className="main bg-dark" >
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit} >
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => setEmail(e.target.value.trim())} type="text" id="email" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => setPassword(e.target.value.trim())} type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button disabled={email && password ? false : true} type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )
}