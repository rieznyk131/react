import {type FC, memo} from "react";

export const UserComponent: FC<{foo: ()=> void, arr: number[], item: {name: string}}> = memo(({item, arr}) => {
    console.log('user');
    console.log(arr);

    return (
        <div>{item.name}</div>
    );
});