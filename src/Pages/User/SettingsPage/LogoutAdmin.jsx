// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

function LogoutAdmin() {
  return (
    <div className="flex justify-end">
      <Link
        to={"/logout"}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded 
    transition duration-200 mr-[50px]"
      >
        Logout
      </Link>
    </div>
  );
}

export default LogoutAdmin;
