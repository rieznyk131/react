// import './MyComponent.css' - basic scc
import styles from './MyComponent.module.css' //module css
import type {FC} from "react"

type MyComponentPropType = {
    text: string
}

export const MyComponent: FC<MyComponentPropType> = ({text}) => {
    return (
        // <div className={'wrapper'}> - basic css
        <div className={styles.wrapper}>
            {text}
        </div>
    )
}