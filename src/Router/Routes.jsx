import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            index: true,
            element:<h2>home</h2>
        },
        {
            path:"/all-volunteer",
            element:<h2>All</h2>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
      ]
    },
  ]);
  
  export default router;