import {type FC, memo} from "react";

//мемомізуємо компонент, щоб він повторно не рендерився при ререндері батьківського компонента, якщо в дочірньому не змінюються пропси
// Визначаємо функціональний компонент (FC), описуючи типи пропсів:
// foo — функція без аргументів, arr — масив чисел.

export const UserComponent: FC<{foo: ()=> void, arr: number[]}> = memo(({arr}) => {
    console.log('user');
    console.log(arr);


    return (
        <div>
            User Component
        </div>
    );
});