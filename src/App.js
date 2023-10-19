import React from 'react';

import {Characters} from "./components/Characters/Characters";
import {Simpsons} from "./components/Simpsons/Simpsons";

const App = () => {

    return (
        <div>
            <Simpsons/>
            <hr/>
            <Characters/>
        </div>
    );
};

export {App};