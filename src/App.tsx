import './App.css';
import {coursesArray} from './data/CorsesArray.ts';
import type {ICourseModel} from './models/CoursesModel.ts';
import Courses from './components/CoursesComponent.tsx';
import './components/CoursesComponent.css';

function App() {


  return (
      <div className="container">
        {coursesArray.map((course:ICourseModel, index: number) => <Courses key={index} course={course} /> )}
      </div>

  )
}

export default App
