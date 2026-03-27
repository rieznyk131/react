import type {IUserDJ} from "../../../models/DummyJson/IUserDJ.ts";
import type {FC} from "react";
import './user-component-dj.css'

type UserPropsType = {
    item: IUserDJ
}

export const UserComponentDJ: FC<UserPropsType> = ({item}) => {
    return (
        <div className={'user-container-dj'}>
            <div className={'avatar'}>
                <img src="https://img.icons8.com/?size=100&id=iShwhFs38f4L&format=png&color=000000" alt={item.firstName + " " + item.lastName}/>
            </div>
            <div className={'user-info'}>
                <h2 className='text-xl font-bold pb-1'>{item.firstName + " " + item.lastName}</h2>
                <p><span className='font-semibold'>Age: </span>{item.age}</p>
                <p><span className='font-semibold'>Gender: </span>{item.gender}</p>
                <p><span className='font-semibold'>Email: </span>{item.email}</p>
                <p><span className='font-semibold'>Phone: </span>{item.phone}</p>
                <p><span className='font-semibold'>Username </span>{item.username}</p>
                <p><span className='font-semibold'>Birth Date </span>{item.birthDate}</p>
                <p><span className='font-semibold'>University </span>{item.university}</p>
            </div>
                <div className={'user-company-info'}>
                    <h3 className='text-xl font-bold pb-1'>Company:</h3>
                    <ul>
                        <li><span className='font-semibold'>Name: </span>{item.company.name}</li>
                        <li><span className='font-semibold'>Department: </span>{item.company.department}</li>
                        <li><span className='font-semibold'>Title: </span>{item.company.title}</li>
                        <li><span className='font-semibold'>City: </span>{item.company.address.city}</li>
                        <li><span className='font-semibold'>State: </span>{item.company.address.state}</li>
                        <li><span className='font-semibold'>Country: </span>{item.company.address.country}</li>
                    </ul>
                </div>

        </div>
    );
};