import {axiosService} from "./axiosService";
import {urls} from "../constants";

const carService = {
    getAll: (page='1') => axiosService.get(urls.cars.base, {params:{page}}),
    create: (data) => axiosService.post(urls.cars.base, data)
};

export {carService}