import { useState } from "react";
import { Button, Modal, Form, Input, message, Col, Row,  } from "antd";
import { Edit } from "lucide-react";
import { updateCourse } from "../../../Services/courseService";

function EditDetailCourse(props) {
  const { course, onReload } = props;
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
    const response = await updateCourse((course.id).toString(), values);
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
          initialValues={course}
          onFinish={handleFinish}
          
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Name" name="title">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Language" name="language">
                <Input />
              </Form.Item>
            </Col>
            
            <Col span={8}>
              <Form.Item label="Description" name="description">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Price" name="price">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Total Lessions" name="totalLessions">
                <Input />
              </Form.Item>
            </Col>
            
            <Col span={8}>
              <Form.Item label="Enrolled" name="enrolled">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Duration" name="duration">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Skill Level" name="skillLevel">
                <Input />
              </Form.Item>
            </Col>
            
            <Col span={8}>
              <Form.Item label="Rating" name="EstimalRate">
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
      </Modal>
    </div>
  );
}

export default EditDetailCourse;
