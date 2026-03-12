import type {CourseModelType} from '../models/coursesTitleModel.ts'
import type {FC} from 'react'
import './coursesTitleComponent.css'

type MyPropsType = {
    course: CourseModelType
}

const CourseTitle: FC <MyPropsType> = ({course}) => {
    return (
        <div className={'course-title-container'}>
            <h3>{course}</h3>
        </div>
    )
}

export default CourseTitle;