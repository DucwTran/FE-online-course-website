import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../../Components/HeaderAdminPage";
import { useParams } from "react-router-dom";
import { getDetailEnrollment } from "../../../Services/enrollmentService";
import { getDetailUser } from "../../../Services/userService";
import { getDetailCourse } from "../../../Services/courseService";
import { GoBack } from "../../../Components/GoBack";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function DetailOrder() {
  const { id } = useParams(); // Destructure gọn hơn
  const [user, setUser] = useState(null);
  const [course, setCourse] = useState(null);
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      const enrollment = await getDetailEnrollment(id.toString());
      if (enrollment) {
        console.log(enrollment);
        if (enrollment.acceptedBy) {
          const [user, course, admin] = await Promise.all([
            getDetailUser(enrollment.userId.toString()),
            getDetailCourse(enrollment.courseId.toString()),
            getDetailUser(enrollment.acceptedBy),
          ]);
          setUser(user[0]);
          setCourse(course);
          setAdmin(admin[0]);
        } else {
          const [user, course] = await Promise.all([
            getDetailUser(enrollment.userId.toString()),
            getDetailCourse(enrollment.courseId.toString()),
          ]);
          setUser(user[0]);
          setCourse(course);
        }
      }
    };

    if (id) fetchAPI();
  }, [id]);
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <HeaderAdmin title={"Detail Order"} />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <GoBack />
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {course ? (
            <div className="w-[80%] mx-auto">
              <h2 className="text-2xl mb-8 font-bold">Register Course:</h2>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Id:</div>{" "}
                <div> {course.id}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Name:</div>{" "}
                <div className="uppercase"> {course.title}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[150px] text-gray-300 uppercase">Price:</div>{" "}
                <div> {course.price}</div>
              </div>
            </div>
          ) : (
            <p className="text-gray-300">Loading...</p>
          )}
        </motion.div>
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {admin ? (
            <div className="w-[80%] mx-auto">
              <h2 className="text-2xl mb-8 font-bold">Admin accepted:</h2>
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
            </div>
          ) : (
            <div className="w-[80%] mx-auto">
              <p className="text-gray-300">Chưa duyệt</p>
            </div>
          )}
        </motion.div>
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {user ? (
            <div className="w-[80%] mx-auto">
              <h2 className="text-2xl mb-8 font-bold">Register User:</h2>
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
            </div>
          ) : (
            <p className="text-gray-300">Loading...</p>
          )}
        </motion.div>
      </main>
    </div>
  );
}

export default DetailOrder;
