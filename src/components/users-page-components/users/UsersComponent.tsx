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
        <main>
        <section className='max-w-6xl mx-auto px-4 py-8'>
            <h1 className='text-4xl font-bold text-gray-700 mb-6 text-center'>Users</h1>
            {
                loadState && <div className='text-2xl'>Loading...</div>
            }
            {error && (
                <div className='text-red-500 text-xl'>
                    Error: {error}
                </div>
            )}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {
                users.map(user => <UserComponent user={user} key={user.id}/>)
            }
            </div>
        </section>
        </main>
    );
}