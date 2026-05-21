import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {userActions} from "../redux/slices/usersSlice/userSlice.ts";

export const UserPage = () => {
    const {id} = useParams();
    const {user, loadState} = useAppSelector(state => state.users);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id) dispatch(userActions.loadUser(id))
    }, [id]);

    return (
        <>
            {
                !loadState && <div className='text-2xl'>Loading...</div>
            }
            {
                user && <div className='text-2xl'>{user.id} - {user.name}</div>
            }
        </>
    );
};