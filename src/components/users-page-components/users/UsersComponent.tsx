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
        <div className='max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
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