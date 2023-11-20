import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Episode} from "./Episode";
import {episodeActions} from "../../redux";

const Episodes = ({page}) => {

    const {episodes} = useSelector(state => state.episodes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodeActions.getAll({page}))
    }, [page]);

    return (
        <div>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes}