import HeaderAdmin from "../../../Components/HeaderAdminPage";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { GoBack } from "../../../Components/GoBack";
import { useEffect, useState, useCallback } from "react";
import { getQuizById } from "../../../Services/quizService";
import { Button } from "antd";
import EditDetailQuiz from "./EditDetailQuiz";
import EditQuestion from "./EditQuestion";
import AddQuestion from "./AddLQuestion";

function DetailQuiz() {
  const param = useParams();
  const id = param.id;
  const [quiz, setQuiz] = useState();

  const fetchAPIQuiz = useCallback(async () => {
    const res = await getQuizById(id);
    if (res) {
      setQuiz(res);
    }
  }, [id]);

  useEffect(() => {
    fetchAPIQuiz();
  }, [fetchAPIQuiz]);

  const handleReload = () => {
    fetchAPIQuiz();
  };
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <HeaderAdmin title={`Detail Quiz: ${id}`} />

      <main className="max-w-[1180px] mx-auto py-6 px-4 lg:px-8">
        <GoBack target="/admin/quizzes" />
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-[20px] capitalize"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="ml-[80px] text-2xl font-bold mb-[30px]">
            Thông tin tổng quan
          </div>
          {quiz && (
            <div className="w-[80%] mx-auto">
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">Id:</div>{" "}
                <div> {quiz.id}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">Title:</div>{" "}
                <div> {quiz.title}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">
                  Description:
                </div>{" "}
                <div> {quiz.description}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">
                  Name Course:
                </div>{" "}
                <div> {quiz.nameCourse}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">
                  Total Question:
                </div>{" "}
                <div> {quiz.totalQuestions}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">
                  Created At:
                </div>{" "}
                <div> {quiz.createdAt}</div>
              </div>

              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">Edit:</div>{" "}
                <div>
                  <Button>
                    <EditDetailQuiz
                      quiz={quiz}
                      onReload={handleReload}
                    />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-[20px] capitalize"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-center">
            <div className="ml-[80px] text-2xl font-bold mb-[30px]">
              Questions
            </div>
            <div className="mr-[20px]">
              <AddQuestion isNotFull={quiz?.totalQuestions <= 5} quizId={quiz?.id} onReload={handleReload}/>
            </div>
          </div>
          {quiz?.questions &&
            quiz.questions.map((question, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="w-[80%] mx-auto mt-10">
                  <div className="flex gap-5 mb-[20px]">
                    <div className="w-[180px] text-gray-300 uppercase font-bold">
                      Question {index + 1}:
                    </div>{" "}
                    <div> {question.question}</div>
                  </div>
                  <div className="flex gap-5 mb-[20px]">
                    <div className="w-[180px] text-gray-300 uppercase font-bold">
                      Answer:
                    </div>{" "}
                    <div className="flex gap-5">
                      {" "}
                      {question.options.map((option) => {
                        if (option.isCorrect) {
                          return (
                            <div key={option.id} className="text-green-500">
                              {option.option}
                            </div>
                          );
                        } else {
                          return <div key={option.id}>{option.option}</div>;
                        }
                      })}
                    </div>
                  </div>
                </div>
                <div className="mr-[20px]">
                  <Button>
                    <EditQuestion question={question} onReload={handleReload} />
                  </Button>
                </div>
              </div>
            ))}
        </motion.div>
      </main>
    </div>
  );
}

export default DetailQuiz;
