import React, {useEffect, useState} from 'react';

import {carService} from "../../services/carService";
import {CarsForm} from "./CarsForm";
import {Cars} from "./Cars";

const CarsContainer = () => {

    const [cars, setCars] = useState([]);
    const [flag, setFlag] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    const trigger = () => {
        setFlag(prev => !prev)
    };

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [flag]);

    return (
        <div>
            <CarsForm trigger={trigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} trigger={trigger}/>
        </div>
    );
};

export {CarsContainer};