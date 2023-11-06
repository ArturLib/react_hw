import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Episode.module.css';
import {useChapter} from "../../hooks/useChapter";

const Episode = ({episode}) => {

    const {id, name, episode:chapter, characters} = episode;

    const navigate = useNavigate();

    const {setChapter} = useChapter();

    const toCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        setChapter(chapter);
        navigate(`/characters/${ids}`)
    }

    return (
        <div className={css.episode} onClick={toCharacters}>
            <div>ID: {id}</div>
            <div>NAME - {name}</div>
            <div>CHAPTER - {chapter}</div>
        </div>
    );
};

export {Episode}