import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../../services/api.service.ts";

export const AuthResourcesComponent = () => {
    useEffect(() => {
        loadAuthProducts() //виклик функції, котра буде виводити ресурси для авторизованих користувачів

            //якщо запит успішний - виводимо в консоль масив products
            .then(products => {
                console.log(products);
            })

            //якщо сталась помилка, то ловимо її та виводимо в консоль
            .catch(reason => {
                console.log(reason);

                //викликаємо функцію refresh для оновлення access токену, після чого знову робимо запит на вивід всіх продуктів та відображаємо їх в консолі
                refresh().then(() => loadAuthProducts()).then(value => console.log(value))
            })
    }, []);
    return (
        <></>
    );
};