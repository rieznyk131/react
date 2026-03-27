const baseUrlJsonPlaceholder = 'https://jsonplaceholder.typicode.com';

export const urlJsonPlaceholder = {
    users: {
        allUsers: baseUrlJsonPlaceholder + '/users',
        byId: (id: number) => {
            return baseUrlJsonPlaceholder + '/users' + id;
        }
    },

    posts: {
        allPosts: baseUrlJsonPlaceholder + '/posts',
        byId: (id: number) => {
            return baseUrlJsonPlaceholder + '/posts' + id;
        }
    },

    comments: {
        allComments: baseUrlJsonPlaceholder + '/comments',
        byId: (id: number) => {
            return baseUrlJsonPlaceholder + '/comments' + id;
        }
    }
}

