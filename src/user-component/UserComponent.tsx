import type {IUser} from '../models/IUser.ts'
import type {FC} from 'react'
import './user-component-style.css'

type UserPropsType = {
    item: IUser
}

export const UserComponent: FC<UserPropsType> = ({item}) => {
    return (
        <div className={'user-container'}>
            <div className={'avatar'}>
                <img src="https://img.icons8.com/?size=100&id=iShwhFs38f4L&format=png&color=000000" alt={item.name}/>
            </div>
            <div className={'user-info'}>

                <h2 className={'text-xl font-bold pb-1'}>{item.name}</h2>
                <p><span className='font-semibold'>Username</span>: {item.username}</p>
                <p><span className='font-semibold'>E-mail</span>: <a href="mailto:{item.email}">{item.email}</a> </p>
                <p><span className='font-semibold'>Phone</span>: {item.phone}</p>
                <p><span className='font-semibold'>Web-site</span>: <a href="#">{item.website}</a></p>
            </div>
            <div className={'user-company-info'}>
                <h3 className='text-xl font-bold pb-1'>Company:</h3>
                <ul>
                   <li><span className='font-semibold'>Name</span>: {item.company.name}</li>
                   <li><span className='font-semibold'>Catch phrase</span>: {item.company.catchPhrase}</li>
                   <li><span className='font-semibold'>Bs</span>: {item.company.bs}</li>
                </ul>
            </div>
         </div>
    )
}