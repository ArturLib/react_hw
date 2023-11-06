import React, {useEffect, useState} from 'react';

import {episodeService} from "../../../services";
import {Episode} from "../Episode/Episode";

import css from './Episodes.module.css'
import {useSearchParams} from "react-router-dom";

const Episodes = () => {

    const [episodes, setEpisodes] = useState({prev: null, next: null, results: []});
    
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');


    useEffect(() => {
        episodeService.getAll(page).then(({data: {info: {prev, next}, results}}) => setEpisodes({prev, next, results}))
    }, [page]);

    const prev = () => {
        setQuery(prev => {
            prev.set('page', `${+page - 1}`)
            return prev
        })
    };

    const next = () => {
        setQuery(prev => {
            prev.set('page', `${+page + 1}`)
            return prev
        })
    };

    return (
        <div>

            <div className={css.episodes}>
                {episodes.results.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>

            <div className={css.button}>
                <button disabled={!episodes.prev} onClick={prev}>prev</button>
                <button disabled={!episodes.next} onClick={next}>next</button>
            </div>

        </div>
    );
};

export {Episodes}