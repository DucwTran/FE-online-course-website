import { GoBack } from "../../../Components/GoBack";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeaderAdmin from "../../../Components/HeaderAdminPage";
import { Button, Form, Input, message, Col, Row } from "antd";
import { getFormattedDate } from "../../../Utils/dateTime";
import { useNavigate } from "react-router-dom";
import { createQuiz } from "../../../Services/quizService";

function CreateQuiz() {
  const [form] = Form.useForm();
  const [mess, contextHolder] = message.useMessage();
  const navigate = useNavigate();


  const handleFinish = async (values) => {
    const result = {
      ...values,
      createdAt: getFormattedDate(),
      totalQuestions: 0,
      questions: []
    };
    const res = await createQuiz(result);
    if (res) {
      mess.open({
        title: "success",
        content: "Cập nhật thành công",
        duration: 5,
      });
      navigate(`/admin/quizzes`);
    } else {
      mess.open({
        title: "error",
        content: "Cập nhật không thành công",
        duration: 3,
      });
    }
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <HeaderAdmin title={`Create Quiz`} />
      {contextHolder}

      <main className="max-w-[1180px] mx-auto py-6 px-4 lg:px-8">
        <GoBack />
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-[20px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-3xl font-bold mb-[30px] text-center">
            Thông tin Quiz
          </div>
          <Form layout="vertical" form={form} onFinish={handleFinish}>
            <Row gutter={16}>
              <Col span={18}>
                <Form.Item
                  label={<span className="text-white">Title</span>}
                  name="title"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label={<span className="text-white">Course ID</span>}
                  name="courseId"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label={<span className="text-white">Description</span>}
                  name="description"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button type="primary" htmlType="submit">
                  Cập nhật
                </Button>
              </Col>
            </Row>
          </Form>
        </motion.div>
      </main>
    </div>
  );
}

export default CreateQuiz;
