import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";

export const UsersComponent = () => {
    console.log('users');
    const foo = useCallback(() => {
        console.log('test');
    }, []);
    const arr: number[] = useMemo(() => {
        return [11, 22, 33, 44]
    }, [])
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(value => setUser(value));

        return () => {
            console.log('unsubscribe');
        };
    },[])
    return (
        <div>
            Users Component <br/>

               <UserComponent foo={foo} arr={arr}/>

       </div>
    );
};