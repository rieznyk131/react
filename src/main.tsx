import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./router/Routes.tsx"; //імпортуємо константу з роутами

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routes} />
) //підключаємо роути до додатку
