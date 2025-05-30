import React, { useState } from "react";
import { Button, Modal, Form, message, Row, Col, Select } from "antd";
import { EditOutlined } from "@ant-design/icons";
import {
  patchEnrollment,
} from "../../../Services/enrollmentService";

function AcceptOrder({ order, onReload }) {
  const admin = JSON.parse(localStorage.getItem("user"));
  const options = [
    { value: admin.id, label: "Accepted" },
    { value: "0", label: "Not Accepted" },
  ];
  const [form] = Form.useForm();
  const [mess, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleFinish = async (values) => {
    const result = {
      ...values,
    };
    if (values.acceptedBy !== "0") {
      result.status = "active";
    } else {
      result.status = "inactive";
    }
    const res = await patchEnrollment(order.id, result);
    if (res) {
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
      <Button
        onClick={showModal}
        className="scale-80"
        icon={<EditOutlined />}
        type="primary"
      />
      <Modal
        title="Duyệt đăng kí?"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        width={300}
      >
        <Form
          layout="vertical"
          form={form}
          initialValues={admin}
          onFinish={handleFinish}
        >
          <Row>
            <Col span={8}>
              <Form.Item label="Accepted" name="acceptedBy">
                <Select style={{ width: 200 }} options={options} />
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

export default AcceptOrder;
