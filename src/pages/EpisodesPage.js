import React, {useEffect} from 'react';

import {Episodes, useChapter} from "../components";

const EpisodesPage = () => {
    
    const {setChapter} = useChapter();

    useEffect(() => {
        setChapter(null)
    }, []);

    return (
        <div>
            <Episodes/>
        </div>
    );
};

export {EpisodesPage}