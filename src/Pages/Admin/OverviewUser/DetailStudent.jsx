import { useParams } from "react-router-dom";
import HeaderAdmin from "../../../Components/HeaderAdminPage";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getDetailUser } from "../../../Services/userService";
import { GoBack } from "../../../Components/GoBack"

function DetailStudent() {
  const param = useParams();
  const id = param.id;
  const [student, setStudent] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getDetailUser(id);
      if (res) {
        setStudent(res[0]);
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
          {student && (
            <div className="w-[80%] mx-auto">
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Id:</div>{" "}
                <div> {student.id}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Name:</div>{" "}
                <div className="uppercase"> {student.fullName}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Email:</div>{" "}
                <div> {student.email}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">
                  Password:
                </div>{" "}
                <div> {student.password}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Status:</div>{" "}
                <div className="uppercase"> {student.status}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Role:</div>{" "}
                <div className="uppercase"> {student.role}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">
                  Create at:
                </div>{" "}
                <div> {student.createdAt}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">
                  Last Login:
                </div>{" "}
                <div> {student.lastLogin}</div>
              </div>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}

export default DetailStudent;
