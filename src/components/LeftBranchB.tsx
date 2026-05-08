import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";


export const LeftBranchB = () => {
    const {changeTheme} = useContext(MyContext)
    const  handlerLight = () => {
        changeTheme('light')
    };
    const  handlerDark = () => {
        changeTheme('dark')
    };

    return (
        <div>
            <button onClick={handlerLight}>light</button>
            <button onClick={handlerDark}>dark</button>
        </div>
    );
};