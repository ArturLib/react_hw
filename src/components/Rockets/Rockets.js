import React, {useEffect, useState} from 'react';

import {Rocket} from "../Rocket/Rocket";
import css from './Rockets.module.css';

const Rockets = () => {

    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/').then(res => res.json()).then(value => setRockets(value))
    }, []);

    return (
        <div className={css.rocketsStyle}>
            {rockets.filter(value => value.launch_year !== '2020').map(rocket => <Rocket rocket={rocket}/>)}
        </div>
    );
};

export {Rockets};