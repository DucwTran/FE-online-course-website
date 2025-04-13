// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


function DetailAccount() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex-1 overflow-auto relative z-10">

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {user && (
            <div className="w-[80%] mx-auto">
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Id:</div>{" "}
                <div> {user.id}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Name:</div>{" "}
                <div className="uppercase"> {user.fullName}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Email:</div>{" "}
                <div> {user.email}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">
                  Password:
                </div>{" "}
                <div> {user.password}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Status:</div>{" "}
                <div className="uppercase"> {user.status}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Role:</div>{" "}
                <div className="uppercase"> {user.role}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">
                  Create at:
                </div>{" "}
                <div> {user.createdAt}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">
                  Last Login:
                </div>{" "}
                <div> {user.lastLogin}</div>
              </div>
              {user.totalPosts && (
                <div className="flex gap-5 mb-[20px]">
                  <div className="w-[150px] text-gray-300 uppercase">
                    Total post:
                  </div>{" "}
                  <div> {user.totalPosts}</div>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}

export default DetailAccount;
