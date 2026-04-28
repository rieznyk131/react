// import './App.css'
import {MyComponent} from "./components/MyComponent.tsx";

function App() {


  return (
    <>

      <MyComponent title={'title 1'}>
          lorem ipsum
      </MyComponent>
        <MyComponent title={'title 2'}>
            Hello World
        </MyComponent>
        <MyComponent title={'title 1'}/>

    </>
  )
}

export default App
