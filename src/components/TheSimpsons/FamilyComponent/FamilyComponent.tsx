import {simpsons} from '../../../data/TheSimpsonsArray.ts'
import type {ICharacterModel} from '../../../models/ICharacterModel.ts'
import Character from '../CharactersComponents/CharacterCopmonent.tsx'
import '../CharactersComponents/ComponentStyle.css'

export const Simpsons = ()=> {
    return (
        <div className="simpsons">
            {
                simpsons.map((item: ICharacterModel, index: number) => <Character key={index} item={item}>{item.info}</Character>)
            }
        </div>
    )
}
