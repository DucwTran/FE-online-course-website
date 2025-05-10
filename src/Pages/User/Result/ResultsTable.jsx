// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Edit, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllAnswerOfUser } from "../../../Services/quizService";
import { Button } from "antd";

const ResultsTable = () => {
  const [answers, setAnswers] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAnswers, setFilteredAnswers] = useState([]);
  const id = JSON.parse(localStorage.getItem("user")).id;
  const navigate = useNavigate();
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
    answers && answers.length === 0 ? (
      <div className="flex justify-center items-center h-[300px] text-2xl font-semibold text-gray-500 italic">
            Chưa đăng kí khóa học nào
          </div>
    ) : (
      <motion.div
      className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Results List</h2>
        <div className="relative ">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-white text-gray-800 border border-gray-400 placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Name Course
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Mark
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Actions
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black flex gap-2 items-center">
                    {answer.id}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black capitalize">
                    {answer.nameCourse}
                  </td>

                  <td className="px-10 py-4 whitespace-nowrap text-sm text-black">
                    {answer.markQuiz}/{answer.totalMark}
                  </td>
                  <td className="px-10 py-4 whitespace-nowrap text-sm text-gray-300 flex">
                    <div className="text-indigo-400 hover:text-indigo-300 mr-2 cursor-pointer">
                      <Button onClick={() => {navigate(`/user/answer/${answer.id}`);}}> 
                        <Edit size={18} />
                      </Button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </motion.div>
    )
  );
};
export default ResultsTable;
