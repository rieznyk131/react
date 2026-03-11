import type {FC, ReactNode} from "react"

type MyComponentPropType = {
    title: string,
    children?: ReactNode
}

export const MyComponent: FC<MyComponentPropType> = ({title, children}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    )
}