import Cursor from "./component/Cursor";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from './component/About'
import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Mainlayout from "./layouts/Mainlayout";


function App() {
  const router = createBrowserRouter(
       createRoutesFromElements(
        <Route>
          <Route path="/" element={<Mainlayout/>}/>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
         
        </Route>
       )
  )
  return (
  
    // <div className="bg-transparent min-h-screen w-full text-white relative z-10">
    //   <Cursor />
    //   <Navbar/>
    //   <Home/>
    //   <About/>
    // </div>
    <RouterProvider router={router}/>
  );
}

export default App;