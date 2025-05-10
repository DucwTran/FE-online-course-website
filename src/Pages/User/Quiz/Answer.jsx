import { Link, useParams } from "react-router-dom";
import HeaderUser from "../../../Components/HeaderUserPage";
import {
  getAnswerByIdAnswerOfUser,
  getQuizById,
} from "../../../Services/quizService";
import { useEffect, useState } from "react";
import { Button, Radio } from "antd";

function Answer() {
  const param = useParams();
  const id = param.id;
  const [quizzes, setQuizzes] = useState();
  const [answers, setAnswers] = useState();
  const [userAnswers, setUserAnswers] = useState();

  useEffect(() => {
    const fetchUserAnswers = async () => {
      const res = await getAnswerByIdAnswerOfUser(id);
      if (res) {
        setUserAnswers(res.answerOfUser);
        setAnswers(res);
      }
    };
    fetchUserAnswers();
  }, [id]);

  useEffect(() => {
    const fetchQuiz = async () => {
      if (!answers || !answers.courseId) return;

      const res = await getQuizById(answers.courseId);
      if (res) {
        setQuizzes(res);
      }
    };
    fetchQuiz();
  }, [answers]);
  console.log("quizzes", quizzes);
  console.log("answers", answers);
  const getOptionStyle = (question, option) => {
    const isCorrect = option.isCorrect;
    const userSelected = userAnswers[question.id] === option.id;

    if (isCorrect) {
      return "text-green-600 font-semibold";
    } else if (userSelected) {
      return "text-red-600 font-semibold";
    } else {
      return "";
    }
  };

  return (
    <div className="h-full overflow-auto">
      <div className="z-10">
        <HeaderUser title={"Quiz Final"} />
      </div>
      <div className="w-[50%] mx-auto mt-10 mb-20">
        {quizzes && userAnswers && (
          <div>
            <div className="font-bold text-3xl mb-1">{quizzes.title}</div>
            <div className="italic text-md mb-10">{quizzes.description}</div>

            {quizzes.questions?.map((question, index) => (
              <div key={question.id} className="mb-6">
                <div className="mb-2 font-bold">
                  Question {index + 1}: {question.question}
                </div>

                <div className="ml-6 flex flex-col gap-2">
                  {question.options.map((option) => (
                    <Radio
                      key={option.id}
                      checked={userAnswers[question.id] === option.id}
                      disabled
                    >
                      <span className={getOptionStyle(question, option)}>
                        {option.option}
                      </span>
                    </Radio>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center">
          <Button type="primary">
            <Link to={`/user`}>
              Quay về khóa học
            </Link>
          </Button>
        </div>
      </div>
    </div>
    
  );
}

export default Answer;
