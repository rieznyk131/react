import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {UserComplexComponent} from "../components/complex/UserComplexComponent.tsx";

export const ComplexPage = () => {
    const users = useAppSelector(state => state.users.users)
    const posts = useAppSelector(state => state.posts.posts)
    const comments = useAppSelector(state => state.comments.comments)

    if (!users.length || !posts.length || !comments.length) {
        return (
            <div className='ml-50 mt-50 text-red-600'>
                <p className='text-4xl  mb-5'>No Access</p>
                <p className='text-2xl'>You need to visit Users | Posts | Comments pages first</p>
            </div>
        )
    }

    return (
        <>
            {
                users.map(user => <UserComplexComponent user={user} key={user.id}/>)
            }
        </>
    );
};