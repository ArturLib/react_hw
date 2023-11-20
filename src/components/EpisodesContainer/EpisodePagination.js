import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const EpisodePagination = () => {

    const {prevPage, nextPage} = useSelector(state => state.episodes);
    const [, setQuery] = useSearchParams();

    const prev = () => {
        setQuery(prev1 => {
            prev1.set('page', (+prev1.get('page')-1).toString())
            return prev1
        })
    };

    const next = () => {
        setQuery(prev1 => {
            prev1.set('page', (+prev1.get('page')+1).toString())
            return prev1
        })
    };

    return (
        <div>
            <button disabled={!prevPage} onClick={prev}>next</button>
            <button disabled={!nextPage} onClick={next}>prev</button>
        </div>
    );
};

export {EpisodePagination}