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
import DetailCourseAdmin from "../Pages/Admin/DetailCourse";
import DetailAdmin from "../Pages/Admin/OverviewAdmin/DetailAdmin";
import DetailStudent from "../Pages/Admin/OverviewUser/DetailStudent";
import CreateCourse from "../Pages/Admin/OverviewCourse/CreateCourse";
import Orders from "../Pages/Admin/Order";
import DetailOrder from "../Pages/Admin/Order/DetailOrder";
import SettingsUser from "../Pages/User/SettingsPage";
import EnrolledCourses from "../Pages/User/EnrolledCourses";
import DetailEnrolledCourse from "../Pages/User/EnrolledCourses/DetailEnrolledCourse";
import DetailCourseUser from "../Pages/User/AllCourse/DetailCourseUser";
import AllCourseUser from "../Pages/User/AllCourse";
import Quiz from "../Pages/User/Quiz";
import Answer from "../Pages/User/Quiz/Answer";
import Results from "../Pages/User/Result";
import OverviewQuiz from "../Pages/Admin/OverviewQuiz";
import DetailQuiz from "../Pages/Admin/DetailQuiz";
import CreateQuiz from "../Pages/Admin/OverviewQuiz/CreateQuiz";
import ResultsAdmin from "../Pages/Admin/ResultAdmin";

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
    element: <PrivateRoutes role="student" />,
    children: [
      {
        path: "/user",
        element: <LayoutUser />,
        children: [
          {
            index: true,
            element: <EnrolledCourses />,
          },
          {
            path: "detail-enrolled-course/:id",
            element: <DetailEnrolledCourse />,
          },
          {
            path: "all-courses",
            element: <AllCourseUser />,
          },
          {
            path: "results",
            element: <Results />
          },
          {
            path: "quiz/:id",
            element: <Quiz />,
          },
          {
            path: "answer/:id",
            element: <Answer />,
          },
          {
            path: "detail-course-user/:id",
            element: <DetailCourseUser />,
          },
          {
            path: "settings",
            element: <SettingsUser />,
          },
        ],
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
            element: <OverviewCourse />,
          },
          {
            path: "quizzes",
            element: <OverviewQuiz />
          },
          {
            path: "users",
            element: <OverviewUser />,
          },
          {
            path: "admins",
            element: <OverviewAdmin />,
          },
          {
            path: "settings",
            element: <SettingsPage />,
          },
          {
            path: "detail-course/:id",
            element: <DetailCourseAdmin />,
          },
          {
            path: "detail-quiz/:id",
            element: <DetailQuiz />
          },
          {
            path: "detail-admin/:id",
            element: <DetailAdmin />,
          },
          {
            path: "detail-quiz/:id",

          },
          {
            path: "detail-order/:id",
            element: <DetailOrder />,
          },
          {
            path: "detail-student/:id",
            element: <DetailStudent />,
          },
          {
            path: "create-course",
            element: <CreateCourse />,
          },
          {
            path: "create-quiz",
            element: <CreateQuiz />
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "results-admin",
            element: <ResultsAdmin />
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
