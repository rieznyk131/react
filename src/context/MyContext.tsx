import {createContext} from "react";

type ContextType = {
        theme: string;
        changeTheme: (theme: string) => void;
    };

    const defaultValue: ContextType = {
        theme: 'light',
        changeTheme: (theme: string) => {
            console.log(theme)
        }
    };

    export const MyContext = createContext<ContextType>(defaultValue);