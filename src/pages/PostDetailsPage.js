import React from 'react';

import {PostDetails} from "../components/PostContainer/PostDetails";
import {useLoaderData} from "react-router-dom";

const PostDetailsPage = () => {

    const {data} = useLoaderData();

    return (
        <div>
            <PostDetails post={data}/>
        </div>
    );
};

export {PostDetailsPage}