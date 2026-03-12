import type {FC} from 'react'
import './CoursesComponent.css'
import type {ICourseModel} from "../models/CoursesModel.ts";


type MyPropsType = {
    course: ICourseModel
}

const Courses: FC <MyPropsType> = ({course}) => {
    return (
        <div className={'course-container'}>
            <div className={'image'}>
                <img src={course.img} alt={course.title}/>
            </div>
            <div className={'info'}>
                <h3 className='text-2xl mb-2'>{course.title}</h3>
                <p className='text-xl'>Month duration: {course.monthDuration}</p>
                <p className='text-xl mb-4'>Hour Duration: {course.hourDuration}</p>
                <ul className='text-xl'>Modules: {
                    course.modules.map(module => (
                        <li className='text-lg list-disc ml-10'>{module}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Courses;