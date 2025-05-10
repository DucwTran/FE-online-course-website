// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteCourse from "./DeleteQuiz";
import { getAllQuiz } from "../../../Services/quizService";

const CoursesTable = () => {
  const [quizzes, setQuizzes] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredQuizzes, setFilteredQuizzes] = useState([]);
  const fetchAPI = async () => {
    const res = await getAllQuiz();
    if (res) {
      setQuizzes(res);
      setFilteredQuizzes(res);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleReload = () => {
    fetchAPI();
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = quizzes.filter((quiz) =>
      quiz.nameCourse.toLowerCase().includes(term)
    );

    setFilteredQuizzes(filtered);
  };
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Quiz List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search quizzes..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name Course
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Questions
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          {filteredQuizzes && (
            <tbody className="divide-y divide-gray-700">
              {filteredQuizzes.map((quiz) => (
                <motion.tr
                  key={quiz.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                    {quiz.id}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {quiz.nameCourse}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {quiz.totalQuestions}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 flex">
                    <div className="text-indigo-400 hover:text-indigo-300 mr-2 cursor-pointer">
                      <Link to={`/admin/detail-quiz/${quiz.id}`}>
                        <Edit size={18} />
                      </Link>
                    </div>
                    <div className="text-red-400 hover:text-red-300 cursor-pointer">
                      <DeleteCourse quiz={quiz} onReload={handleReload} />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </motion.div>
  );
};
export default CoursesTable;
