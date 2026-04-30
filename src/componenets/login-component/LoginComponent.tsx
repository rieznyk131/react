import {useEffect} from "react";
import {login} from "../../services/api.service.ts";

export const LoginComponent = () => {
    useEffect(() => {
        login({ //викликаємо функцію з api.services, в котру передаємо значення username, password та expiresInMins (через скільки скінчиться дія access токену)
            username: 'emilys', //ім'я користувача
            password: 'emilyspass', //пароль
            expiresInMins: 1 //термін дії access токену закінчиться через 1 хвилину
        })
    }, []);
    return (
        <>
        Login Component
        </>
    );
};