import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Home from "../Pages/Home";
import AddVolunteer from "../Pages/AddVolunteer";
import AllPostPage from "../Pages/AllPostPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            index: true,
            element:<Home></Home>
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
        {
            path:"/add-volunteer",
            element:<AddVolunteer></AddVolunteer>
        },
        {
            path:"/all-post",
            element:<AllPostPage></AllPostPage>
        },
      ]
    },
  ]);
  
  export default router;