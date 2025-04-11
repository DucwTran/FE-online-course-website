import LayoutDefault from "../Layout/LayoutDefault";
import PrivateRoutes from "../Components/PrivateRoutes";
import Login from "../Pages/Default/Login";
import Register from "../Pages/Default/Resgister";
import Home from "../Pages/Default/Home";
import AllCourses from "../Pages/Default/AllCourses";
import DetailCourse from "../Pages/Default/DetailCourse";
import Unauthorized from "../Pages/Default/Unauthorized";
import NotFound from "../Pages/Default/NotFound";

import LayoutUser from "../Layout/LayoutUser";
import LayoutAdmin from "../Layout/LayoutAdmin";
import Logout from "../Pages/Default/Logout";

export const Routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "all-courses",
        element: <AllCourses />,
      },
      {
        path: "detail-course/:id",
        element: <DetailCourse />,
      },
    ],
  },
  {
    element: <PrivateRoutes role="user" />,
    children: [
      {
        path: "/user",
        element: <LayoutUser />,
        children: [],
      },
    ],
  },
  {
    element: <PrivateRoutes role="admin" />,
    children: [
      {
        path: "/admin",
        element: <LayoutAdmin />,
      },
    ],
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
