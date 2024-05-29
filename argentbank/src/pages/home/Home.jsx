import React from 'react'
import './_index.scss'
import FeatureCard from '../../components/featureCard/FeatureCard'
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
            <section className="features">
                <FeatureCard
                    imgSrc="./icon-chat.webp"
                    imgAlt="Chat Icon"
                    title="You are our #1 priority"
                    content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                />
                <FeatureCard
                    imgSrc="./icon-money.webp"
                    imgAlt="Money Icon"
                    title="More savings means higher rates"
                    content="The more you save with us, the higher your interest rate will be!"
                />
                <FeatureCard
                    imgSrc="./icon-security.webp"
                    imgAlt="Security Icon"
                    title="Security you can trust"
                    content="We use top of the line encryption to make sure your data and money is always safe."
                />
            </section>
        </main>
    )
}