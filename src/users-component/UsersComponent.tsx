import {useState, useEffect} from "react";
import type {IUser} from '../models/IUser.ts'
import {UserComponent} from '../user-component/UserComponent.tsx'
import {getUsers} from "../services/api.service.ts";
import './users-component-style.css'

export const UsersComponent =() => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [item, setItems] = useState<IUser | null>(null);


    useEffect(() => {
        getUsers()
        .then(response => setUsers(response));
        return () => {
            console.log('done');
        }
    },[]);

    const details = (item: IUser) => {
        setItems(item);
    }

    return (
        <div >
            {
                item && <div className={'selected-user-details'}>

                    <div className={'user-info'}>
                        <p><span className='font-semibold'>Username</span>: {item.username}</p>
                        <p><span className='font-semibold'>E-mail</span>: <a href="mailto:{item.email}">{item.email}</a></p>
                        <p><span className='font-semibold'>Phone</span>: {item.phone}</p>
                        <p><span className='font-semibold'>Web-site</span>: <a href="#">{item.website}</a></p>
                    </div>

                <div className={'user-company-info'}>
            <h3 className='text-l'>Company:</h3>
            <ul>
                <li><span className='font-semibold'>Name</span>: {item.company.name}</li>
                <li><span className='font-semibold'>Catch phrase</span>: {item.company.catchPhrase}</li>
                <li><span className='font-semibold'>Bs</span>: {item.company.bs}</li>
            </ul>
                </div>
            </div>
            }

            <div className={'users-container'}>
                {
                users.map(user => <UserComponent details={details} key={user.id} item={user}/>)
                }
            </div>


        </div>


    )}


