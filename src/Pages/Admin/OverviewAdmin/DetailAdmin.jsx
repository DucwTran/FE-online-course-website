import { useParams } from "react-router-dom";
import HeaderAdmin from "../../../Components/HeaderAdminPage";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getDetailUser } from "../../../Services/userService";
import { GoBack } from "../../../Components/GoBack";

function DetailAdmin() {
  const param = useParams();
  const id = param.id;
  const [admin, setAdmin] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getDetailUser(id);
      if (res) {
        setAdmin(res[0]);
      }
    };
    fetchAPI();
  }, [id]);
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <HeaderAdmin title={`Detail Admin: ${id}`} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <GoBack />

        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {admin && (
            <div className="w-[80%] mx-auto">
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Id:</div>{" "}
                <div> {admin.id}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Name:</div>{" "}
                <div className="uppercase"> {admin.fullName}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Email:</div>{" "}
                <div> {admin.email}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">
                  Password:
                </div>{" "}
                <div> {admin.password}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Status:</div>{" "}
                <div className="uppercase"> {admin.status}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Role:</div>{" "}
                <div className="uppercase"> {admin.role}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">
                  Create at:
                </div>{" "}
                <div> {admin.createdAt}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">
                  Last Login:
                </div>{" "}
                <div> {admin.lastLogin}</div>
              </div>
              {admin.totalPosts && (
                <div className="flex gap-5 mb-[20px]">
                  <div className="w-[150px] text-gray-300 uppercase">
                    Total post:
                  </div>{" "}
                  <div> {admin.totalPosts}</div>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}

export default DetailAdmin;
