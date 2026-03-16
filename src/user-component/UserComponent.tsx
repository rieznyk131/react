import type {IUser} from '../models/IUser.ts'
import type {FC} from 'react'
import './user-component-style.css'

type UserPropsType = {
    item: IUser,
    details: (item: IUser) => void
}

export const UserComponent: FC<UserPropsType> = ({item, details}) => {
    return (
        <div className={'user-container'}>
            <div className={'avatar'}>
                <img src="https://img.icons8.com/?size=100&id=iShwhFs38f4L&format=png&color=000000" alt={item.name}/>
            </div>
            <h2 className='text-xl'>{item.name}</h2>
            <button onClick={()=>{
                console.log(item);

                details(item)
            }}>Details</button>

         </div>
    )
}