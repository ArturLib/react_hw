import React from 'react';
import {useSelector} from "react-redux";

import css from './Header.module.css';

const Header = () => {

    const {currentEpisode} = useSelector(state => state.episodes);

    return (
        <div className={css.header}>
            {
                currentEpisode ?
                    <h1>{currentEpisode}</h1>
                    :
                    <h1>Rick and Morty</h1>
            }
        </div>
    );
};

export {Header}