import React, {useEffect, useState} from 'react';

import {toDosService} from "../../services/toDosService";
import {ToDo} from "./ToDo";

const ToDos = () => {

    const [toDos, setToDos] = useState([]);

    useEffect(() => {
        toDosService.getAll().then(({data}) => setToDos(data))
    }, []);

    return (
        <div>
            {toDos.map(toDo => <ToDo key={toDo.id} toDo={toDo}/>)}
        </div>
    );
};

export {ToDos};