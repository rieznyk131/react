import type {ICharacterModel} from '../../../models/ICharacterModel.ts'
import type {FC, ReactNode} from 'react';
import './ComponentStyle.css'

type CharacterPropsType = {
    item: ICharacterModel,
    children: ReactNode
}

 const Character: FC<CharacterPropsType> = ({item, children}) => {
    return (
        <div className='my-10 border-2 ml-5 mr-5 p-5 flex justify-between rounded-lg bg-purple-200 shadow-xl'>
            <div className={'info-block'}>
                <h3 className='text-2xl mb-2'>{item.name} {item.surname}</h3>
                <p>{children}</p>
            </div>
            <div>
                <img src={item.photo} alt={item.name}/>
            </div>
        </div>
    )
}

export default  Character;