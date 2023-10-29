import React from 'react';

const ToDo = ({toDo}) => {
    
    const {id, title} = toDo;
    
    return (
        <div>
            <div>ID: {id}</div>
            <div>TITLE: {title}</div>
        </div>
    );
};

export {ToDo};