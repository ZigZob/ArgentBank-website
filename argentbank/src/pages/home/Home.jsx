import React from 'react'
import './_index.scss'
import Features from '../../containers/homeFeatures/Features'
export default function Home() {
    return (
        <main>
            <div className="hero">
                <section className="heroContent">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="heroContent__subtitle">No fees.</p>
                    <p className="heroContent__subtitle">No minimum deposit.</p>
                    <p className="heroContent__subtitle">High interest rates.</p>
                    <p className="heroContent__text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <Features />
        </main>
    )
}