import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Home from "../Pages/Home";
import AddVolunteer from "../Pages/AddVolunteer";
import AllPostPage from "../Pages/AllPostPage";
import ViewDetails from "../Pages/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import BeAVolunteer from "../Pages/BeAVolunteer";
import ManageProfile from "../Pages/ManageProfile";
import UpdatePost from "../Pages/UpdatePost";

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
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/add-volunteer",
            element:<PrivateRoute><AddVolunteer></AddVolunteer></PrivateRoute>
        },
        {
            path:"/all-volunteer",
            element:<AllPostPage></AllPostPage>
        },
        {
            path:"/volunteer/:id",
            element:<BeAVolunteer></BeAVolunteer>
        },
        {
            path:"/all-post",
            element:<AllPostPage></AllPostPage>,
            loader: ()=> fetch(`http://localhost:9000/all-posts`)
        },
        {
            path:"/details/:id",
            element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
            loader: ({params})=> fetch(`http://localhost:9000/single-post/${params.id}`)
        },
        {
            path:"/update/:id",
            element:<PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>,
        },
        {
            path:'/manage-profile',
            element:<PrivateRoute><ManageProfile></ManageProfile></PrivateRoute>
        }
      ]
    },
  ]);
  
  export default router;