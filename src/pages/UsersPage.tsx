import {userActions} from "../redux/slices/usersSlice/userSlice.ts";
import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";


export const UsersPage = () => {
    const users = useAppSelector(state => state.users.users)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers())

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