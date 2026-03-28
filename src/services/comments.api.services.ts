import type {ICommentJP} from "../models/JsonPlaceholder/ICommentsJP.ts";
import {urlJsonPlaceholder} from "../constans/urlsJsonPlaceholder.ts";
import type {ICommentDJ} from "../models/DummyJson/ICommentDJ.ts";
import type {CommentsDummyJsonModel} from "../models/DummyJson/DummyJsonModel.ts";
import {urlDummyJson} from "../constans/urlsDummyJson.ts";

export const commentsService = {
    getCommentsJP: async(): Promise<ICommentJP[]> => {
        return await fetch(urlJsonPlaceholder.comments.allComments)
            .then(value => value.json())
    },
    getCommentDJ: async (): Promise<ICommentDJ[]> => {
        const response: CommentsDummyJsonModel = await fetch(urlDummyJson.comments.allComments)
            .then(value => value.json());
        return response.comments
    }
}