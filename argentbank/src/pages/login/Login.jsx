import React, { useState } from 'react'
import './_index.scss'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { storeToken, setUserData } from '../../store/slices/userSlice';

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function handleSubmit(e) {
        e.preventDefault();

        const responseToAuth = await fetch("http://localhost:3001/api/v1/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        if (!responseToAuth.ok) {
            alert("Email/Password incorrect")
            throw new Error('Failed to fetch user');
        }
        const data = await responseToAuth.json();
        const token = await data.body.token;
        dispatch(storeToken({
            token: token
        }))
        console.log(token);
        const responseToGetUserData = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        });
        if (!responseToGetUserData.ok) {
            alert("An error occurred fetching your data")
            throw new Error("Failed to fetch user data");
        }
        const userData = await responseToGetUserData.json();
        console.log(userData.body)
        dispatch(setUserData({
            userName: userData.body.userName,
            lastName: userData.body.lastName,
            firstName: userData.body.firstName,
        }))
        navigate("/profile");
    };

    return (
        <main className="main bg-dark" >
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit} >
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => { setEmail(e.target.value.trim()); console.log(e.target.value); }} type="text" id="email" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => { setPassword(e.target.value.trim()); console.log(e.target.value); }} type="password" id="password" />
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