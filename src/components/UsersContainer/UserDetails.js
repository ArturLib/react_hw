import React from 'react';
import {useNavigate} from "react-router-dom";

const UserDetails = ({user}) => {

    const {id, name, username, email, phone, website,
            address:{street, suite, city, zipcode},
            company:{catchPhrase, bs}} = user;

    const navigate = useNavigate();

    return (
        <div>
            <h3>User id - {id} info</h3>
            <div>name - {name}</div>
            <div>username - {username}</div>
            <div>email - {email}</div>
            <div>phone - {phone}</div>
            <div>website - {website}</div>

            <h4>ADDRESS:</h4>
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
            <div>zipcode: {zipcode}</div>

            <h4>COMPANY:</h4>
            <div>catchPhrase - {catchPhrase}</div>
            <div>bs - {bs}</div>

            <button onClick={() => navigate('posts')}>get posts of user</button>

        </div>
    );
};

export {UserDetails}