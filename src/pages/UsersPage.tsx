import {userActions} from "../store/userSlice.ts";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {useAppSelector} from "../store/store.ts";

export const UsersPage = () => {
    const users = useAppSelector(state => state.users.users)
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value =>

                dispatch(userActions.loadUsers(value)))

    },[dispatch]);

    return (
        <div>
            {/*<UsersComponent/>*/}

            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    );
};