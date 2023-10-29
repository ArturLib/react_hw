import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    
    const {id, postId, name, email, body} = comment;

    const navigate = useNavigate();

    return (
        <div>
            <div>ID: {id}</div>
            <div>POST_ID: {postId}</div>
            <div>NAME: {name}</div>
            <div>EMAIL: {email}</div>
            <div>
                BODY: {body}
                <button onClick={() => navigate('post', {state: {postId}})}>post</button>
            </div>
        </div>
    );
};

export {Comment};