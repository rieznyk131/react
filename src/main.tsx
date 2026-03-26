import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./router/Rotes.tsx";

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routes} />
)
