import type {FC} from "react"

type MyComponentPropType = {
    text: string
}

export const MyComponent: FC<MyComponentPropType> = ({text}) => {
    return (
        <div>
            {text}
        </div>
    )
}