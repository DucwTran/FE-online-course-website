// import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes({ role }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const token = user.token;
  const roleUser = user.role;

  if (!token) {
    <Navigate to="/login" replace />;
  }

  if (roleUser === role) {
    <Navigate to={`/${role}`} />;
  } else if (roleUser !== role) {
    return <Navigate to={`/unauthorized`} replace />;
  }

  return <Outlet />;
}
export default PrivateRoutes;
