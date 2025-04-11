import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  localStorage.removeItem("user");

  useEffect(() => {
    navigate("/login"); //phải đặt ở đây, nếu để ngoài ngoài body component sẽ bị lỗi
  }, [navigate])

  return <div></div>;
}

export default Logout;
