import {UserComponent} from "./UserComponent.tsx";
import {useEffect, useState} from "react";

export const UsersComponent = () => {
    console.log('users');
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(value => setUser(value));
    },[])
    return (
        <div>
            Users Component <br/>

               <UserComponent/>

       </div>
    );
};