import React from 'react';

const Simpson = ({simpson}) => {

    const {id, name, info, img} = simpson;

    return (
        <div>
            <h2>{id} - {name}</h2>
            <p>{info}</p>
            <img src={img}  alt={name}/>
        </div>
    );
};

export {Simpson};