import React from 'react';

import {UsersContainer} from "./components/UsersContainer/UsersContainer";
import {CommentsContainer} from "./components/CommentsContainer/CommentsContainer";

const App = () => {
    return (
        <div>
            <UsersContainer/>
            <hr/>
            <CommentsContainer/>
        </div>
    );
};

export {App};