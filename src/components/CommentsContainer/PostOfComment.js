import React from 'react';

const PostOfComment = ({postDetails}) => {

    const {id, title, body} = postDetails;

    return (
        <div>
            <div>ID: {id}</div>
            <div>TITLE: {title}</div>
            <div>BODY: {body}</div>
        </div>
    );
};

export {PostOfComment};