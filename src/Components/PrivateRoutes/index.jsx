// import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes () {
  const isAuthen = true
  return (
    <>
      {isAuthen ? (
        <Outlet />
      ) : (
        <>
          <Navigate to="/" />
        </> 
      )}
    </>
  );
}
export default PrivateRoutes;