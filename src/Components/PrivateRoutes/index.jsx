// import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes ({role}) {
  const user = localStorage.getItem("user");
  const token = user.token;
  const roleUser = user.role;

  if(!token) {
    <Navigate to="/login" replace/>
  }

  if (roleUser === role) {
    <Navigate to={`/${role}`}/>
  }

  return (
    <Outlet />
  );
}
export default PrivateRoutes;