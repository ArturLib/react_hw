import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import {EpisodePagination, Episodes} from "../components";
import {episodeActions} from "../redux";

const EpisodesPage = () => {
    
    const [query, setQuery] = useSearchParams();
    const page = query.get('page');
    const dispatch = useDispatch();

    useEffect(() => {
        if (!page) {
            setQuery({page: '1'});
        }
        dispatch(episodeActions.setCurrent({currentEpisode: null}));
    }, []);

    return (
        <div>
            <Episodes page={page}/>
            <EpisodePagination/>
        </div>
    );
};

export {EpisodesPage}