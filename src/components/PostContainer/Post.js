import React from 'react';

const Post = ({post}) => {

    const {id, title, body} = post;

    return (
        <div>
            <hr/>
            <div>ID: {id}</div>
            <div>TITLE: {title}</div>
            <div>BODY: {body}</div>
            <hr/>
        </div>
    );
};

export {Post};