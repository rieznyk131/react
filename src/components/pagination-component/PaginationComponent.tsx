import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let currentPage = Number((searchParams.get('page')) || '1');
    return (
        <div className='flex gap-5'>
            <button className='w-16 h-10 bg-gray-200 border border-b-gray-400 cursor-pointer rounded-xl' onClick={() => {
                if (currentPage > 1) {
                    setSearchParams({page: (--currentPage).toString()});
                }

            }}>Prev</button>
            <button className='w-16 h-10 bg-gray-200 border border-b-gray-400 cursor-pointer rounded-xl' onClick={() => setSearchParams({ page: (++currentPage).toString() })

            }>Next</button>

        </div>
    );
};