import {LeftBranchA} from "./LeftBranchA.tsx";
import {useMemo} from "react";

export const LeftBranch = () => {

    const memo = useMemo(() => {
        for (let i = 0; i < 1000; i++) {
            console.log(i);
        }
        return null
    }, [])
    return (
        <div>
            Left Branch

            <LeftBranchA/>
        </div>
    )
};