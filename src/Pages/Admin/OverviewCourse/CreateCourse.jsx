import { GoBack } from "../../../Components/GoBack";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeaderAdmin from "../../../Components/HeaderAdminPage";
import { Button, Form, Input, message, Col, Row } from "antd";
import { getFormattedDate } from "../../../Utils/dateTime";
import { createCourse, getAllCourses } from "../../../Services/courseService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function CreateCourse() {
  const [form] = Form.useForm();
  const [mess, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [lengthNumCourse, setLengthNumCourse] = useState();
  useEffect(() => {
    const fetchAPI = async () => {
      const AllCourses = await getAllCourses();
      if (AllCourses) {
        setLengthNumCourse(AllCourses.length);
      }
    };
    fetchAPI();
  }, []);

  const handleFinish = async (values) => {
    const result = {
      ...values,
      id: (lengthNumCourse + 1).toString(),
      enrolled: 0,
      createdAt: getFormattedDate(),
      EstimateRate: 5,
      totalLessions: 0,
    };
    const res = await createCourse(result);
    if (res) {
      mess.open({
        title: "success",
        content: "Cập nhật thành công",
        duration: 5,
      });
      navigate(`/admin/detail-course/${lengthNumCourse + 1}`);
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
      <HeaderAdmin title={`Create Course`} />
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
            Thông tin khóa học
          </div>
          <Form layout="vertical" form={form} onFinish={handleFinish}>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  label={<span className="text-white">Name</span>}
                  name="title"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label={<span className="text-white">Language</span>}
                  name="language"
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
              <Col span={8}>
                <Form.Item
                  label={<span className="text-white">Price</span>}
                  name="price"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label={<span className="text-white">Skill Level</span>}
                  name="skillLevel"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label={<span className="text-white">Duration</span>}
                  name="duration"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label={<span className="text-white">Thumbnail</span>}
                  name="thumbnail"
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

export default CreateCourse;
