import React from 'react';

const PostDetails = ({postDetails}) => {

    const {title, body} = postDetails;

    return (
        <div>
            <h3>title - {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export {PostDetails};