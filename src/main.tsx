import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout.tsx";
import {PageB} from "./pages/PageB.tsx";
import {PageA} from "./pages/PageA.tsx";
import {HomePage} from "./pages/HomePage.tsx";

// const router = createBrowserRouter([
//     {
//         path:'/', element: <MainLayout/>,
//         children:
//             [
//                 {path: '', element: <HomePage/>},
//                 {path: 'a', element: <PageA/>},
//                 {
//                     path: 'b', element: <PageB/>,
//                     children: [
//                         {path: '1', element: <div className='w-80 h-15 bg-blue-200 flex justify-center items-center'>Content 1</div>},
//                         {path: '2', element: <div className='w-80  h-15 bg-blue-200 flex justify-center items-center'>Content 2</div>},
//                         {path: '3', element: <div className='w-80  h-15 bg-blue-200 flex justify-center items-center'>Content 3</div>}
//                     ]
//                 },
//
//             ]
//
//     }
//     ])

createRoot(document.getElementById('root')!)
    .render(
 <BrowserRouter>
     <Routes>
         <Route path={'/'} element={<MainLayout/>}>
             <Route path={''} element={<HomePage/>}/>
             <Route path={'a'} element={<PageA/>}/>
             <Route path={'b'} element={<PageB/>}>
                 <Route path={'1'} element={<div className='w-80 h-15 bg-blue-200 flex justify-center items-center'>Content 1</div>}/>
                 <Route path={'2'} element={<div className='w-80  h-15 bg-blue-200 flex justify-center items-center'>Content 2</div>}/>
                 <Route path={'3'} element={<div className='w-80  h-15 bg-blue-200 flex justify-center items-center'>Content 3</div>}/>
             </Route>

         </Route>
     </Routes>
 </BrowserRouter>
)
