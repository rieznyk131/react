import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let currentPage = Number((searchParams.get('page')) || '1');
    return (
        <div>
            <button onClick={() => {
                if (currentPage >= 1) {
                    setSearchParams({page: (--currentPage).toString()});
                }

            }}>Prev</button>
            <button onClick={() => setSearchParams({ page: (++currentPage).toString() })

            }>Next</button>

        </div>
    );
};