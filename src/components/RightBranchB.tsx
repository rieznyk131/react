import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";
import './RightBranchB-style.css'

export const RightBranchB = () => {
    const {theme} = useContext(MyContext);
    return (
        <div className={theme}>
            <p> this is component RightBranchB and theme is {theme}</p>
        </div>
    );
};