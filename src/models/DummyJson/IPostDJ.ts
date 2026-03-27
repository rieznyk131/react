export interface IPostDJ {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: Reactions
    views: number
    userId: number
}

interface Reactions {
    likes: number
    dislikes: number
}
