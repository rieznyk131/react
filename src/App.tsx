import './App.css'
import {useState} from "react";

function App() {


// eslint-disable-next-line prefer-const
let [counter, setCounter] = useState<number>(0)
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={()=>
      setCounter(prevState => {return ++prevState})}>increment</button>
      <button onClick={() =>
      setCounter(--counter)}>decrement</button>

    </div>
  )
}

export default App
