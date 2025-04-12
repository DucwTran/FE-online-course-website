import LayoutDefault from "../Layout/LayoutDefault";
import PrivateRoutes from "../Components/PrivateRoutes";
import Login from "../Pages/Default/Login";
import Register from "../Pages/Default/Resgister";
import Home from "../Pages/Default/Home";
import AllCourses from "../Pages/Default/AllCourses";
import DetailCourse from "../Pages/Default/DetailCourse";
import Unauthorized from "../Pages/Default/Unauthorized";
import NotFound from "../Pages/Default/NotFound";
import Logout from "../Pages/Default/Logout";

import LayoutUser from "../Layout/LayoutUser";
import LayoutAdmin from "../Layout/LayoutAdmin";

import OverviewPage from "../Pages/Admin/OverviewPage";
import OverviewCourse from "../Pages/Admin/OverviewCourse";
import OverviewUser from "../Pages/Admin/OverviewUser";
import OverviewAdmin from "../Pages/Admin/OverviewAdmin";
import SettingsPage from "../Pages/Admin/SettingsPage";

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
        children: [
          {
            index: true,
            element: <OverviewPage />,
          },
          {
            path: "courses",
            element: <OverviewCourse />
          },
          {
            path: "users",
            element: <OverviewUser />
          },
          {
            path: "admins",
            element: <OverviewAdmin />
          },
          {
            path: "settings", 
            element: <SettingsPage />
          }
        ],
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
