import {UserComplexComponent} from "./UserComplexComponent.tsx";
import Pagination from "@mui/material/Pagination";
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";

export const ComplexPageComponent = () => {
    const users = useAppSelector(state => state.users.users)
    const posts = useAppSelector(state => state.posts.posts)
    const comments = useAppSelector(state => state.comments.comments)
    const [searchParams, setSearchParams] = useSearchParams();

    const pageFromUrl = searchParams.get("page");
    const currentPage = pageFromUrl ? parseInt(pageFromUrl, 10) : 1;
    const usersPerPage = 1;

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(users.length / usersPerPage)

    return (
        <main className='max-w-6xl mx-auto min-h-screen px-4 py-8'>
            {
                (!users.length || !posts.length || !comments.length) ? (
                        <div className='flex min-h-[60vh] items-center justify-center px-4'>

                            <div className='max-w-xl rounded-3xl border border-red-200 bg-white p-10 shadow-sm flex flex-col items-center text-center'>

                                <img className='mb-5'
                                     src="https://img.icons8.com/?size=70&id=DMjPcfLrUgg4&format=png&color=000000"
                                     alt="no access icon"/>

                                <p className='mb-3 text-4xl font-bold tracking-tight text-gray-900'>
                                    No Access
                                </p>

                                <p className='text-lg leading-relaxed text-gray-600'>
                                    You need to visit
                                    <span className='font-semibold text-gray-900'> Users</span>,
                                    <span className='font-semibold text-gray-900'> Posts</span>,
                                    and
                                    <span className='font-semibold text-gray-900'> Comments </span>
                                    pages first.
                                </p>
                            </div>
                        </div>
                    )
                    :
                    <section className='flex flex-col items-center gap-5'>
                        <h1 className='text-4xl font-bold text-gray-700 mb-6 text-center'>Complex Page</h1>
                        <div>
                            {
                                currentUser.map(user => <UserComplexComponent user={user} key={user.id}/>)
                            }
                        </div>

                        <Pagination
                            count={totalPages || 1}
                            page={currentPage}
                            onChange={(_, value) => {
                                if (value === 1) {
                                    setSearchParams({});
                                } else {
                                    setSearchParams({page: value.toString()});
                                }
                            }}
                            color="primary"
                            variant="outlined"
                            shape="rounded"
                        />

                    </section>

            }
        </main>
    )
};