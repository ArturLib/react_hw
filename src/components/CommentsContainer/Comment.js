import React from 'react';

import {PostOfComment} from "./PostOfComment";

const Comment = ({comment, click, postDetails}) => {
    
    const {id, name, email, body} = comment;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>
                body: {body}
                <button onClick={() => click(id)}>post</button>
            </div>
            {postDetails && <PostOfComment postDetails={postDetails}/>}
        </div>
    );
};

export {Comment};