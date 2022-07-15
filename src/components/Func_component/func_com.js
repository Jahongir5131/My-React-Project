import React from "react";

const Link = (props) => {
    const { url, title } = props
    return (
        <p>
        <a href={url}>{title}</a>
        </p>
    )
}

export default Link