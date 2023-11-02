import React, {useEffect, useState} from 'react';

import {UserDetails} from "../components/UsersContainer/UserDetails";
import {Outlet, useParams} from "react-router-dom";
import {userService} from "../services/userService";

const UserDetailsPage = () => {

    const {userId} = useParams();

    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getById(userId).then(({data}) => setUser(data))
    }, [userId]);

    return (
        <div>
            {user && <UserDetails user={user}/>}
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};