import { useNavigate, useParams } from "react-router-dom";
import HeaderUser from "../../../Components/HeaderUserPage";
import { getQuizById, postAnswerUser } from "../../../Services/quizService";
import { useEffect, useState } from "react";
import { Form, Button, Radio, Typography } from "antd";
function Quiz() {
  const { Text } = Typography;
  const param = useParams();
  const navigate = useNavigate();
  const id = param.id;
  const [quizzes, setQuizzes] = useState();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getQuizById(id);
      if (res) {
        setQuizzes(res);
      }
    };
    fetchAPI();
  }, [id]);
  const [form] = Form.useForm();
  const handleSubmit = async (value) => {
    const userAnswers = Object.entries(value).map(([questionId, optionId]) => ({
      questionId: questionId, 
      AnswerContent: optionId,
    }));
    const result = {
      userId : user.id,
      quizId: quizzes.id,
      answerOfUser: userAnswers
    }
    const res = await postAnswerUser(result);
    if(res) {
      navigate(`/user/answer/${res.id}`);
    }
  };
  return (
    <div className="h-full overflow-auto">
      <div className="z-10">
        <HeaderUser title={"Quiz Final"} />
      </div>
      <div className="w-[50%] mx-auto mt-10 mb-20">
        {quizzes && (
          <div>
            <div className="font-bold text-3xl mb-1">{quizzes.title}</div>
            <div className="italic text-md mb-10">{quizzes.description}</div>
            <Form form={form} onFinish={handleSubmit} layout="vertical">
              {quizzes.questions?.map((question, index) => (
                <div key={question.id}>
                  <div className="mb-2 font-bold">
                    Question {index + 1}: {question.question}
                  </div>
                  <Form.Item
                    name={question.id}
                    rules={[
                      { required: true, message: "Please select an answer!" },
                    ]}
                  >
                    <Radio.Group>
                      <div className="flex flex-col gap-2 ml-12 mt-2">
                        {question.options.map((option) => (
                          <Radio key={option.id} value={option.id}>
                            {option.option}
                          </Radio>
                        ))}
                      </div>
                    </Radio.Group>
                  </Form.Item>
                </div>
              ))}

              <div className="mx-auto w-fit mb-20 mt-[30px]">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
