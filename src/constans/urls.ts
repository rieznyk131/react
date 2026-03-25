const baseUrl = 'https://jsonplaceholder.typicode.com';

export const urls = {
    users: {
        allUsers: baseUrl +'/users',
        byId: (id: number) => {
            return baseUrl + '/' + id;
        }
    },
    posts: {
        allPosts: baseUrl +'/posts',
        byId: (id: number) => {return baseUrl + '/' + id;}
    }
}