import {
  Form,
  Input,
  message,
  Button,
  Col,
  Row,
  Modal,
  Switch,
  Tooltip,
  Select,
} from "antd";
import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { updateUser } from "../../../Services/userService";

function EditStudent(props) {
  const options = [
    { value: "admin", label: "Admin" },
    { value: "student", label: "Student" },
  ];
  const { student, onReload } = props;
  const [form] = Form.useForm();
  const [mess, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    form.setFieldsValue({
      ...student,
      status: student.status === "active",
    });
  };
  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleFinish = async (values) => {
    values.status = values.status ? "active" : "inactive";
    const response = await updateUser(student.id, values);
    if (response.status==="success") {
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
  console.log(student);
  return (
    <>
      {contextHolder}

      <Tooltip title="Chỉnh sửa">
        <Button
          onClick={showModal}
          className="ml-5"
          icon={<EditOutlined />}
          type="primary"
        />
      </Tooltip>

      <Modal
        title="Chỉnh sửa User"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          form={form}
          initialValues={student}
          onFinish={handleFinish}
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Name" name="fullName">
                <Input />
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Password" name="password">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Role" name="role">
                <Select style={{ width: 120 }} options={options} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Trạng thái"
                name="status"
                valuePropName="checked"
              >
                <Switch checkedChildren="On" unCheckedChildren="Off" />
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
    </>
  );
}

export default EditStudent;
