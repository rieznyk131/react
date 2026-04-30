import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx"; //імпортуємо функцію для створення роуту

export const routes = createBrowserRouter([ //створюєм роутер і описуємо всі маршрути
    {path: '/', //головний шлях (корень сайту)
        element: <MainLayout/>, // створюємо обгортку для всіх сторінок
        children: [ //зазначаємо дочірні елементи головного лейауту, будуть рендеритись через Outlet в головному лейауті
            {index: true, //маршрут за замовчуванням для "/"
                element: <HomePage/>}, //компонент головної сторінки
            {path: 'login', //маргрут для сторінки авторизації
                element: <LoginPage/>}, //компонент сторінки авторизації
            {path: '/auth/resources', //маршрут для сторінки з ресурсами для авторизованих користувачів
                element: <AuthResourcesPage/>} //компонент для авторизованного ресурсу
        ]}
])