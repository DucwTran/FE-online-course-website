import { useState } from "react";
import { Button, Modal, Form, Input, message, Col, Row } from "antd";
import { Edit } from "lucide-react";
import { updateQuiz } from "../../../Services/quizService";

function EditDetailQuiz(props) {
  const { quiz, onReload } = props;
  const [form] = Form.useForm();
  const [mess, contextHolder] = message.useMessage();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleFinish = async (values) => {
    const response = await updateQuiz(quiz.id.toString(), values);
    if (response) {
      setIsModalOpen(false);
      onReload();
      mess.open({
        title: "success",
        content: "Cập nhật thành công",
        duration: 5,
      });
    } else {
      mess.open({
        title: "error",
        content: "Cập nhật không thành công",
        duration: 3,
      });
    }
  };

  return (
    <div>
      {contextHolder}
      <Edit size={18} onClick={showModal} />

      <Modal
        title="Edit Lession"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          form={form}
          initialValues={quiz}
          onFinish={handleFinish}
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Title" name="title">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Description" name="description">
                <Input.TextArea rows={4} />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}

export default EditDetailQuiz;
