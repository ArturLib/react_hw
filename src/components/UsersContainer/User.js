import React from 'react';

const User = ({user}) => {

    const {id, name, email} = user;

    return (
        <div>
            <div>ID - {id}</div>
            <div>NAME - {name}</div>
            <div>EMAIL - {email}</div>
        </div>
    );
};

export {User};