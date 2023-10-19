import React from 'react';

const Character = ({character}) => {

    const {id, name, status, species, gender, image} = character;

    return (
        <div>
            <div>
                <h2>{id} - {name}</h2>
                <p>status - {status}</p>
                <p>species - {species}</p>
                <p>gender - {gender}</p>
            </div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};