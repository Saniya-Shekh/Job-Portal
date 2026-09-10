import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/homePage/Home";
import Login from "../pages/forms/Login";
import App from "../App";
import Profile from "../Components/navbar/Profile";
import Score from "../pages/score/Score";
import Activities from "../pages/activities/Activities";
import SchoolRegister from "../pages/forms/SchoolRegister";


let Routes = createBrowserRouter(
    [{
    path:'/',
    element: <App></App>,
    children: [
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path:'/home',
            element: <Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path: '/schoolRegister',
            element: <SchoolRegister></SchoolRegister>
        },
        {
            path: 'profile',
            element: <Profile></Profile>
        },
        { 
            path:'/score',
            element: <Score></Score>
        },
        {
            path: '/activities',
            element: <Activities></Activities>
        }

    ]
       
    }]
)

export default Routes