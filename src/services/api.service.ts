import axios from "axios";
import type {ICar} from "../models/ICar.ts";

export const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1',
    headers: {'Content-Type': 'application/json'},
})

export const getAllCars = async (): Promise<ICar[]> => {
    const {data} = await axiosInstance.get('/cars')
    return data
}

export const addCar = async (car: ICar): Promise<ICar> => {
    const {data} = await axiosInstance.post('/cars', car);
    return data
}