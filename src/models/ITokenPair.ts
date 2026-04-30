//типізуємо дані об'єкту з парою токенів, котрий приходить при запиті на URL /auth/refresh

export interface ITokenPair {
    accessToken: string
    refreshToken: string
}