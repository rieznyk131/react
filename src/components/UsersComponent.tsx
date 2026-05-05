import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useMemo} from "react";
import {useFetch} from "../hooks/useFetch.tsx";

export const UsersComponent = () => {
    console.log('users');
    const foo = useCallback(() => {
        console.log('test');
    }, []);
    const arr: number[] = useMemo(() => {
        return [11, 22, 33, 44]
    }, []);
    const users = useFetch();

    return (
        <div>
            Users Component <br/>

            {
                users.map(user =>  <UserComponent foo={foo} arr={arr} item={user}/>)
            }

       </div>
    );
};