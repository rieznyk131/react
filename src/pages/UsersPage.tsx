import {userActions} from "../redux/slices/usersSlice/userSlice.ts";
import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";


export const UsersPage = () => {
    const {users,loadState } = useAppSelector(state => state.users)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers())

    },[dispatch]);

    return (
        <div>
            {/*<UsersComponent/>*/}
            {
                !loadState && <div className='text-2xl'>Loading...</div>
            }
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    );
};