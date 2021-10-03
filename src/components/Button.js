import React from 'react'

const Button = (props) => {
    const {work} = props
    return (
        <div className="button">
            <a href={work.link} target="_blank">View Project</a>
        </div>
    )
}

export default Button
