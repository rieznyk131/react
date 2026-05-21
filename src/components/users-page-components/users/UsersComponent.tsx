import {useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.ts";
import {userActions} from "../../../redux/slices/usersSlice/userSlice.ts";
import {UserComponent} from "../user/UserComponent.tsx";


export const UsersComponent=  () => {
    const {users,loadState, error } = useAppSelector(state => state.users)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userActions.loadUsers())

    },[dispatch]);

    return (
        <div>
            {
                loadState && <div className='text-2xl'>Loading...</div>
            }
            {error && (
                <div className='text-red-500 text-xl'>
                    Error: {error}
                </div>
            )}
            {
                users.map(user => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
}