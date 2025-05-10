import { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  message,
  Col,
  Row,
  Switch,
  Checkbox,
} from "antd";
import { Edit } from "lucide-react";
import { updateQuestion } from "../../../Services/quizService";

function EditQuestion(props) {
  const { question, onReload } = props;
  const [form] = Form.useForm();
  const [mess, contextHolder] = message.useMessage();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
    const mappedOptions = question.options.map((opt) => ({
      text: opt.option, // đổi 'option' -> 'text'
      isCorrect: opt.isCorrect,
    }));
    form.setFieldsValue({
      question: question.question,
      options: mappedOptions,
    });
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleFinish = async (values) => {

    // const response = await updateQuestion(question.id.toString(), values);
    // if (response) {
    //   setIsModalOpen(false);
    //   onReload();
    //   mess.open({
    //     title: "success",
    //     content: "Cập nhật thành công",
    //     duration: 5,
    //   });
    // } else {
    //   mess.open({
    //     title: "error",
    //     content: "Cập nhật không thành công",
    //     duration: 3,
    //   });
    // }
    console.log("values", values);
  };

  return (
    <div>
      {contextHolder}
      <Edit size={18} onClick={showModal} />

      <Modal
        title="Edit Question"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={handleFinish}
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Question" name="question">
                <Input />
              </Form.Item>
            </Col>

            {question?.options.map((option, index) => (
              <Row gutter={16} key={index} style={{ width: "100%" }}>
                <Col span={16}>
                  <Form.Item
                    label={`Option ${index + 1}`}
                    name={["options", index, "text"]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="True?"
                    name={["options", index, "isCorrect"]}
                    valuePropName="checked"
                  >
                    <Checkbox />
                  </Form.Item>
                </Col>
              </Row>
            ))}

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

export default EditQuestion;
