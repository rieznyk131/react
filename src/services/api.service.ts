import {baseUrl} from "../constans/urls.ts";

export const getAll = async <T>(endpoint: string): Promise<T> => {
    try {
        const response = await fetch(`${baseUrl}${endpoint}`)

        if(!response.ok) throw new Error(`${response.status} Failed to load`);

        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error('Server Error. Unable to load data');
    }
}

export const getById = async <T>(endpoint: string, id: string): Promise <T> => {
    try {
    const response = await fetch(`${baseUrl}${endpoint}/${id}`)
    if(!response.ok) throw new Error(`${response.status} Failed to load`);

    const data = await response.json();
    return data;
} catch (error) {
    if (error instanceof Error) {
        throw new Error(error.message);
    }
    throw new Error('Server Error. Unable to load data');
}
}