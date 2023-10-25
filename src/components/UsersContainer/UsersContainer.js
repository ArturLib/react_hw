import React, {useEffect, useState} from 'react';

import {UserForm} from "./UserForm";
import {userService} from "../../services/userService";
import {Users} from "./Users";

const UsersContainer = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));
    }, []);

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <Users users={users}/>
        </div>
    );
}

export {UsersContainer};