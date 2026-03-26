import {createRoot} from 'react-dom/client'
import './index.css'
import {route} from "./router/Routes.tsx";

createRoot(document.getElementById('root')!).render(
    <>
        {route}
    </>
)
