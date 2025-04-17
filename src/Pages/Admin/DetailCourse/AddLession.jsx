import React, { useState } from "react";
import { Button, Modal, Form, Input, message, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { getFormattedDate } from "../../../Utils/dateTime";
import {
  createLession,
  getLessionsById,
} from "../../../Services/lessionService";

function AddLession(props) {
  const { idCourse } = props;
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

  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (values) => {
    const allLessionSameId = await getLessionsById(idCourse);
    const result = {
      ...values,
      courseId: idCourse,
      createdAt: getFormattedDate(),
      order: allLessionSameId.length,
    };
    const res = await createLession(result);
    if (res) {
      messageApi.success("Tạo mới thành công!");
      setIsModalOpen(false);
    } else {
      messageApi.error("Tạo mới không thành công!");
      setIsModalOpen(false);
    }
  };
  return (
    <div>
      {contextHolder}
      <Button type="primary" onClick={showModal}>
        <PlusOutlined /> Add lession
      </Button>
      <Modal
        width={700}
        height={500}
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="flex justify-center items-center m-[50px]">
          <div>
            <h1 className="font-[700] text-[27px] text-[#001931] mb-5 text-center">
              Đăng kí
            </h1>
            <Form layout="vertical" form={form} onFinish={handleSubmit}>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item label="Title" name="title">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Description" name="description">
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item label="URL" name="url">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Duration" name="duration">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={20}></Col>
                <Col span={4} className="mt-[20px]">
                  <Button type="primary" htmlType="submit">
                    Tạo mới
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AddLession;
