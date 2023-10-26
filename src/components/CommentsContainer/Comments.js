import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services/commentsService";
import {Comment} from "./Comment";
import {PostOfComment} from "./PostOfComment";

const Comments = () => {

    const [comments, setComments] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, []);

    const click = async (postId) => {
        const {data} = await commentsService.getById(postId);
        setPostDetails(data);
    };

    return (
        <div>
            <div>
                {comments.map(comment => <Comment key={comment.id} comment={comment} click={click}/>)}
                {postDetails && <PostOfComment postDetails={postDetails}/>}
            </div>
        </div>

    );
};

export {Comments};