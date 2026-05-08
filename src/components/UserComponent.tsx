import {memo} from "react";

//мемомізуємо компонент, щоб він повторно не рендерився при ререндері батьківського компонентся, якщо в дочірньому не змінюються пропси
export const UserComponent = memo(() => {
    console.log('user');


    return (
        <div>
            User Component
        </div>
    );
});