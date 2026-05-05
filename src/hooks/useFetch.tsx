import {useEffect, useState} from "react";


export const useFetch = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(value => setUser(value));

        return () => {
            console.log('unsubscribe');
        };
    },[])
    return users
}