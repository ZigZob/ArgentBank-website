import React from "react";
import './_index.scss'
import FeatureCard from "../../components/featureCard/FeatureCard";

const dataSet = [
    {
        imgSrc: "./icon-chat.png",
        imgSrcSet: "./icon-chat.webp",
        imgAlt: "Chat Icon",
        title: "You are our #1 priority",
        content: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
        imgSrc: "./icon-money.png",
        imgSrcSet: "./icon-money.webp",
        imgAlt: "Money Icon",
        title: "More savings means higher rates",
        content: "The more you save with us, the higher your interest rate will be!"
    },
    {
        imgSrc: "./icon-security.png",
        imgSrcSet: "./icon-security.webp",
        imgAlt: "Security Icon",
        title: "Security you can trust",
        content: "We use top of the line encryption to make sure your data and money is always safe."
    }
]

export default function Features() {
    return (
        <section className="features">
            {dataSet.map((data, index) => (
                <FeatureCard
                    key={index}
                    imgSrc={data.imgSrc}
                    imgSrcSet={data.imgSrcSet}
                    imgAlt={data.imgAlt}
                    title={data.title}
                    content={data.content} />))}
        </section>
    )
}