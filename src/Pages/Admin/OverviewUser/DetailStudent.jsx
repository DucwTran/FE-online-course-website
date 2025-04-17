import { useParams } from "react-router-dom";
import HeaderAdmin from "../../../Components/HeaderAdminPage";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getDetailUser } from "../../../Services/userService";
import { GoBack } from "../../../Components/GoBack";
import { getAllEnrolledCoursesByUserId } from "../../../Services/enrolledCourseService";


function DetailStudent() {
  const param = useParams();
  const id = param.id;
  const [student, setStudent] = useState();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getDetailUser(id);
      if (res) {
        setStudent(res[0]);
        const res_course = await getAllEnrolledCoursesByUserId(id)
        if(res_course){
          setCourses(res_course)
        }
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
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-6"
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

        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-[80%] mx-auto">
            <h2 className="text-xl italic">Các khóa học đã đăng kí</h2>
            <div>
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="my-8 border-gray-400 border-2 py-5 px-7 rounded-xl"
                >
                  <div className="mb-2">Ngôn ngữ: <span className="uppercase">{course.language}</span></div>
                  <div className="flex gap-3 items-center">
                    <div>{course.title},</div>
                    <div className="text-gray-400 italic">at {course.createdAt}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default DetailStudent;
