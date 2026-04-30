//створюємо модель даних для об'єкту з даними юзера, котрий будемо отримувати при запиті на URL /auth/login

export interface IUserWithTokens {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    accessToken: string
    refreshToken: string
}