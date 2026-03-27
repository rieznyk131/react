const baseUrlDummyJson = 'https://dummyjson.com';

export const urlDummyJson = {
    users: {
        allUsers: baseUrlDummyJson + '/users',
        byId: (id: number) => {
            return baseUrlDummyJson + '/users' + id;
        }
    },

    posts: {
        allPosts: baseUrlDummyJson + '/posts',
        byId: (id: number) => {
            return baseUrlDummyJson + '/posts' + id;
        }
    },

    comments: {
        allComments: baseUrlDummyJson + '/comments',
        byId: (id: number) => {
            return baseUrlDummyJson + '/comments' + id;
        }
    }
}