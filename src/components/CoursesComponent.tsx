import type {FC} from 'react'
import './CoursesComponent.css'
import type {ICourseModel} from "../models/CoursesModel.ts";

type MyPropsType = {
    course: ICourseModel
}

const Courses: FC <MyPropsType> = ({course}) => {
    return (
        <div className={'course-container'}>
            <h3>{course.title}</h3>
            <p>Month duration: {course.monthDuration}</p>
        </div>
    )
}

export default Courses;