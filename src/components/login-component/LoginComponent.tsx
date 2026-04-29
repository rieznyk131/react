import {useEffect} from "react";
import {login} from "../../services/api.services.ts";

export const LoginComponent = () => {

    useEffect(() => {
        login(
            {
                username: 'emilys',
                password: 'emilyspass',
                expiresInMins: 1
            }
        )
    }, [])

    return (
        <></>
    );
};