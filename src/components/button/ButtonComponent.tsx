import {useNavigate} from "react-router-dom";
import type {FC} from "react";
import './button-component-style.css'

type ButtonComponentProps = {
    text: string;
    endpoint: string;
}

export const ButtonComponent: FC<ButtonComponentProps> = ({text, endpoint}) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate(endpoint);
    }
    return (
        <div>
            <button onClick={handleOnClick} >{text}</button>
        </div>
    );
};