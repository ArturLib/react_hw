import React from 'react';

const Comment = ({comment}) => {
    
    const {postId, id, name, email, body} = comment;
    
    return (
        <div>
            <h4>Comment info:</h4>
           <div>postId - {postId}</div>
           <div>id - {id}</div>
           <div>name - {name}</div>
           <div>email - {email}</div>
           <div>body - {body}</div>
        </div>
    );
};

export {Comment}