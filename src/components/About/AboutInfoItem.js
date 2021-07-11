import React from 'react'
import "./AboutInfoItem.css"

export default function AboutInfoItem({
    title = 'Title',
    items = ['HTML', 'CSS'],
}) {
    return (
        <div className="aboutInfoItemStyle">
            <h1 className="title">{title}</h1>
            <div className="items">
                {items.map((item, index) => (
                    <div className="item" key={index}>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
