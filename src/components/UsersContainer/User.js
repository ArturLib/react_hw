import React from 'react';
import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    
    const {id, name} = user;

    const navigate = useNavigate();

    return (
        <div>
            <h3>User id - {id} info</h3>
            <div>name - {name}</div>

            <button onClick={() => navigate(`${id}`, {state: {user}})}>user details</button>

            <hr/>
        </div>
    );
};

export {User}