import {useEffect, useState} from "react";
import {UserComponent} from "./UserComponent.tsx";

export const UsersComponent = () => {
    console.log('users');
    const [users, setUsers] = useState([]) //визначаємо стейт компонента
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users));
    },[])//викликаємо fetch для рендеру елементів з API

    //викликаємо дочірній компонент
    return (
        <div>
            <p>Users Component</p>
            <UserComponent/>
        </div>
    );
};