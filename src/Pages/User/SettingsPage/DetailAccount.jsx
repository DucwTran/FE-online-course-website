// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


function DetailAccount() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex-1 overflow-auto relative z-10">

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="bg-[#3498DB] bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-[#3498DB]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {user && (
            <div className="w-[80%] mx-auto">
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-[#FFF8DC] uppercase">Id:</div>{" "}
                <div className="text-white"> {user.id}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-[#FFF8DC] uppercase">Name:</div>{" "}
                <div className="uppercase text-white"> {user.fullName}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-[#FFF8DC] uppercase">Email:</div>{" "}
                <div className="text-white"> {user.email}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-[#FFF8DC] uppercase">
                  Password:
                </div>{" "}
                <div className="text-white"> {user.password}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-[#FFF8DC] uppercase">Status:</div>{" "}
                <div className="uppercase text-white"> {user.status}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-[#FFF8DC] uppercase">Role:</div>{" "}
                <div className="uppercase text-white"> {user.role}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-[#FFF8DC] uppercase">
                  Create at:
                </div>{" "}
                <div className="text-white"> {user.createdAt}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-[#FFF8DC] uppercase">
                  Last Login:
                </div>{" "}
                <div className="text-white"> {user.lastLogin}</div>
              </div>
              {user.totalPosts && (
                <div className="flex gap-5 mb-[20px]">
                  <div className="w-[150px] text-[#FFF8DC] uppercase">
                    Total post:
                  </div>{" "}
                  <div className="text-white"> {user.totalPosts}</div>
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
