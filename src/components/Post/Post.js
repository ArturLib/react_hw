import React from 'react';

import css from './Post.module.css';

const Post = ({post, click}) => {

    const {id, title} = post;

    return (
        <div className={css.postStyle}>
            {id} - {title}
            <button className={css.buttonStyle} onClick={()=>click(id)}>details</button>
        </div>
    );
};

export {Post};