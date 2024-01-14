import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./src/component/About";
import Contact from "./src/component/Contact";
import Error from "./src/component/Error";
import RestaurantMenu from "./src/component/RestaurantMenu";
// import Grocery from "./src/component/Grocery";



const Grocery = lazy(()=>import ( "./src/component/Grocery"));

const AppLayout = ()=>{
  return <div className="applayout">
      <Header/>
      <Outlet/>
     </div>
  
}

const appRouter=createBrowserRouter([
  {
  path:"/",
  element:<AppLayout/>,
  
  children:[
    {
      path:"/",
      element:<Body/>,
    },
    {
      path:"/about",
      element:<About/>,
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/grocery",
      element: <Suspense fallback="Loading......"><Grocery/></Suspense>
        
    },
    {
      path:"/restaurant/:resID",
      element:<RestaurantMenu/>
    }
  ],
  errorElement:<Error/>
  },
 
])

 const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
