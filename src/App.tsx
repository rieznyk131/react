import './App.css'
import {useEffect, useState} from "react";
import {addUser, getAllUsers} from "./api.services.ts";
import type {IUser} from "./models/IUser.ts";

function App() {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getAllUsers().then((data) => setUsers(data));
        addUser({
            id: 11,
            name: 'John Snow',
            email: 'john-snow@gmail.com'
        }).then((newUser) => {
            setUsers((prev) => [...prev, newUser]);
        })
    }, [])


    return (
        <div className="w-full p-5">
            {
                users.map((user: IUser) => (
                    <div className='w-auto h-32 flex flex-col justify-center gap-2' key={user.id}>
                        <p>User ID: {user.id}</p>
                        <p>Email: {user.email}</p>
                        <p>Name: {user.name}</p>
                    </div>))
            }
        </div>
    )
}

export default App
