import {type FC, memo} from "react";

//мемомізуємо компонент, щоб він повторно не рендерився при ререндері батьківського компонента, якщо в дочірньому не змінюються пропси
//зазначаємо, що компонент буде містити функцію foo
export const UserComponent: FC<{foo: ()=> void}> = memo(() => {
    console.log('user');


    return (
        <div>
            User Component
        </div>
    );
});