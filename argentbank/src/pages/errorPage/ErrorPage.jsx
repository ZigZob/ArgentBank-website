import React from 'react'
import './_index.scss'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <main className="main bg-dark" >
            <section className='Error'>
                <p className='Error__title'>404</p>
                <p className='Error__subtitle'>Oops! Looks like you made a wrong turn.</p>
                <div>
                    <Link className='Error__link' to="/">Go back Home</Link>
                    or
                    <Link className='Error__link' to="/login">Sign In</Link>
                </div>
            </section>
        </main>
    )
}