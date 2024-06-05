import './_index.scss'
import React from 'react'

export default function FeatureCard({ imgSrc, imgSrcSet, imgAlt, title, content }) {
    return (
        <>
            <div className="featureCard">
                <img src={imgSrc} srcSet={imgSrcSet} alt={imgAlt} className="featureCard__icon" />
                <h3 className="featureCard__title">{title}</h3>
                <p>
                    {content}
                </p>
            </div>
        </>
    )
}