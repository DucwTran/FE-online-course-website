import LayoutDefault from "../Layout/LayoutDefault";
import PrivateRoutes from "../Components/PrivateRoutes";
import Login from "../Pages/Login";
import Register from "../Pages/Resgister";
import Home from "../Pages/Home";
import AllCourses from "../Pages/AllCourses";
import DetailCourse from "../Pages/DetailCourse";
export const Routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children : [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "all-courses",
                element: <AllCourses />
            },
            {
                path: "detail-course",
                element: <DetailCourse />
            }
        ]
    }
    , 
    {
        element: <PrivateRoutes />,
        children: [

        ]
    }   
]
