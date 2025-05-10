import { useParams } from "react-router-dom";
import HeaderAdmin from "../../../Components/HeaderAdminPage";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getDetailUser } from "../../../Services/userService";
import { GoBack } from "../../../Components/GoBack";
import { getAllEnrolledCourses } from "../../../Services/enrolledCourseService";
import { getAllAnswerOfUser } from "../../../Services/quizService";
import { Search } from "lucide-react";

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
      }
    };
    fetchAPI();
  }, [id]);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getAllEnrolledCourses(id);
      if (res) {
        setCourses(res);
      }
    };
    fetchAPI();
  }, [id]);

  const [answers, setAnswers] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAnswers, setFilteredAnswers] = useState([]);

  const fetchAPI = async (id) => {
    const res = await getAllAnswerOfUser(id);
    if (res) {
      setAnswers(res);
      setFilteredAnswers(res);
    }
  };

  useEffect(() => {
    fetchAPI(id);
  }, [id]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = answers.filter(
      (answer) =>
        answer.nameCourse.toLowerCase().includes(term) ||
        answer.id.toLowerCase().includes(term)
    );

    setFilteredAnswers(filtered);
  };

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
                  <div className="mb-2">
                    Ngôn ngữ:{" "}
                    <span className="uppercase">{course.language}</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div>{course.title},</div>
                    <div className="text-gray-400 italic">
                      at {course.createdAt}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 my-6 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">Results List</h2>
            <div className="relative ">
              <input
                type="text"
                placeholder="Search quizzes..."
                className="bg-gray-800 text-gray-800 border border-gray-400 placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleSearch}
                value={searchTerm}
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Name Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Mark
                  </th>
                </tr>
              </thead>

              {filteredAnswers && (
                <tbody className="divide-y divide-gray-700">
                  {filteredAnswers.map((answer) => (
                    <motion.tr
                      key={answer.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white flex gap-2 items-center">
                        {answer.id}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white capitalize">
                        {answer.nameCourse}
                      </td>

                      <td className="px-10 py-4 whitespace-nowrap text-sm text-white">
                        {answer.markQuiz}/{answer.totalMark}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default DetailStudent;
