import type {IUsersJP} from "../models/JsonPlaceholder/IUsersJP.ts";
import {urlJsonPlaceholder} from "../constans/urlsJsonPlaceholder.ts";
import type {IUserDJ} from "../models/DummyJson/IUserDJ.ts";
import type {UsersDummyJsonModel} from "../models/DummyJson/DummyJsonModel.ts";
import {urlDummyJson} from "../constans/urlsDummyJson.ts";

export const usersService = {
    getUsersJP: async (): Promise<IUsersJP[]> => {
        return await fetch(urlJsonPlaceholder.users.allUsers)
            .then(value => value.json())
    },
    getUsersDJ: async (): Promise<IUserDJ[]> => {
        const response: UsersDummyJsonModel = await fetch(urlDummyJson.users.allUsers)
            .then(value => value.json())
        return response.users
    }
}



