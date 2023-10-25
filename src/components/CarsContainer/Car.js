import React from 'react';
import {carService} from "../../services/carService";

const Car = ({car, setCarForUpdate, trigger}) => {
    
    const {id, brand, price, year} = car;

    const del = async () => {
        await carService.deleteById(id);
        trigger()
    };
    
    return (
        <div>
            <div>ID - {id}</div>
            <div>BRAND - {brand}</div>
            <div>PRICE - {price}</div>
            <div>YEAR - {year}</div>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button onClick={del}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};