import {useCallback, useEffect, useMemo, useState} from "react";
import {UserComponent} from "./UserComponent.tsx";


export const UsersComponent = () => {
    console.log('users');
    const [users, setUsers] = useState([]) //визначаємо стейт компонента, ініціалізуємо його порожнім масивом.

    //оголошуємо константу для фунціїї дочірнього компонента, використовуємо useCallback хук, в якому прописуємо саму функцію та dependencies, за змінами яких буде слідкувати useCallback.
    //якщо dependencies не змінюють своє значення, то об'єкт функції не перестворюється в пам'яті при ререндері батьківського компонента.
    const foo = useCallback(() => {
        console.log('test');
    }, []);

    // оголошуємо константу array, в якій використовуємо хук useMemo для кешування елементу між ререндерами. Елемент буде ререндеритись, тільки якщо його dependencies зміняться.
    const array: number[] = useMemo(() => {
        return [11, 22 ,33]
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                setUsers(users)
            });

        return () => {
            console.log('unsubscribe');
        }
    },[])//робимо запит до API для першого монтування компонента для отримання даних.

    //рендеримо дочірній компонент
    return (
        <div>
            <p>Users Component</p>
            <UserComponent foo={foo} arr={array}/>
        </div>
    );
};