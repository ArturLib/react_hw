import React from 'react';

const ToDo = ({toDo}) => {
    
    const {id, title, completed} = toDo;
    
    return (
        <div>
            <div>ID: {id}</div>
            <div>TITLE: {title}</div>
            <div>COMPLETED: {completed}</div>
        </div>
    );
};

export {ToDo};