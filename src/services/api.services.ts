import type {IUserResponseModel} from "../models/IUserResponseModel.ts";
import type {ICartResponseModel} from "../models/ICartResponseModel.ts";

const baseUrl = 'https://dummyjson.com'

export const userService = {
    getAllUsers: async (): Promise<IUserResponseModel> => {
        return await fetch(baseUrl + '/users?skip=32')
            .then(value => value.json())
    }
};
export const cartService = {
    getCartsOfUser: async (userId: string): Promise<ICartResponseModel> => {
       return await fetch(baseUrl + '/carts/user/' + userId)
            .then(res => res.json())
    }
};
