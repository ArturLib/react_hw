import React from 'react';

import css from './Rocket.module.css';

const Rocket = ({rocket}) => {

    const {mission_name, launch_year, links: {mission_patch_small}} = rocket;

    return (
        <div className={css.rocketStyle}>
            <div>
                {mission_name}<br/>
                {launch_year}<br/>
            </div>
            <img src={mission_patch_small} alt={mission_name}/>
            <hr/>
        </div>
    );
};

export {Rocket};