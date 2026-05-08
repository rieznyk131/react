import './App.css'
import {LeftBranch} from "./components/LeftBranch.tsx";
import {RightBranch} from "./components/RightBranch.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

function App() {
const [themeColor, setThemeColor] = useState<string>("light");

  return (
    <>
    <MyContext.Provider value={{
      theme: themeColor,
      changeTheme: (themeValue: string) => {
        setThemeColor(themeValue);
      }
    }}>
      <LeftBranch/>
      <RightBranch/>
    </MyContext.Provider>
    </>
  )
}

export default App
