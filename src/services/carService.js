import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const carService = {
    getAll: () => axiosService.get(urls.cars.base),
    create: (data) => axiosService.post(urls.cars.base, data),
    updateById: (id, data) => axiosService.put(urls.cars.beId(id), data),
    deleteById: (id) => axiosService.delete(urls.cars.beId(id))
}

export {carService}