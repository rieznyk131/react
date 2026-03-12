import './App.css';
import {coursesTitleArray} from './data/corsesTitleArray.ts';
import type {CourseModelType} from './models/coursesTitleModel.ts';
import CourseTitle from './components/coursesTitleComponent.tsx';
import './components/coursesTitleComponent.css';

function App() {


  return (
      <div className="container">
        {coursesTitleArray.map((course:CourseModelType, index: number) => <CourseTitle key={index} course={course} /> )}
      </div>

  )
}

export default App
