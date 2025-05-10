import React, { useState } from "react";
import { Button, Modal, Form, Input, message, Row, Col, Checkbox } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { createQuestion } from "../../../Services/quizService";

function AddQuestion({ isNotFull, quizId, onReload }) {
  console.log("isNotFull", isNotFull);
  const [form] = Form.useForm();
  const [mess, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    // Mặc định 4 đáp án rỗng
    form.setFieldsValue({
      question: "",
      options: [
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
      ],
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFinish = async (values) => {
    const results = {
      ...values,
      quizId,
    };
    // const response = await createQuestion(results);
    // if (response) {
    //   setIsModalOpen(false);
    //   onReload();
    //   mess.open({
    //     type: "success",
    //     content: "Tạo câu hỏi thành công",
    //     duration: 5,
    //   });
    // } else {
    //   mess.open({
    //     type: "error",
    //     content: "Tạo câu hỏi thất bại",
    //     duration: 3,
    //   });
    // }
    console.log("result", results);
  };

  return (
    <>
      {isNotFull && (
        <div>
          {contextHolder}
          <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
            Thêm câu hỏi
          </Button>

          <Modal
            title="Add New Question"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
          >
            <Form layout="vertical" form={form} onFinish={handleFinish}>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item label="Question" name="question">
                    <Input />
                  </Form.Item>
                </Col>

                {[0, 1, 2, 3].map((index) => (
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
                    Tạo mới
                  </Button>
                </Col>
              </Row>
            </Form>
          </Modal>
        </div>
      )}
    </>
  );
}

export default AddQuestion;
