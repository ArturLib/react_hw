import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const toDosService = {
    getAll: () => axiosService.get(urls.todos)
}

export {toDosService}