import React from "react";

const Article = ({
    image = '',
    content = ''
}) => {
    return (
        <div>
            <p>{content}</p>
            <img src={image} alt='' />
        </div>
    )
}

export default Article
