import {
  Form,
  Input,
  message,
  Button,
  Col,
  Row,
  Modal,
  Select,
  Switch,
  Tooltip,
} from "antd";
import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { updateUser } from "../../../Services/userService";
import { useSelector } from "react-redux";

function EditAdmin(props) {
  const id = useSelector((state) => state.user.id);
  const { admin, onReload } = props;
  const options = [
    { value: "admin", label: "Admin" },
    { value: "student", label: "Student" },
  ];
  const [form] = Form.useForm();
  const [mess, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    form.setFieldsValue(admin);
  };
  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleFinish = async (values) => {
    const response = await updateUser(admin.id, values);
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
  console.log(admin.id) 
  console.log(id)
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
        title="Chỉnh sửa Admin"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          form={form}
          initialValues={admin}
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
                <Select
                  style={{ width: 120 }}
                  options={options}
                  disabled={id === admin.id}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Created At" name="createdAt">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Last Login" name="lastLogin">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Trạng thái" name="status">
                <Switch
                  checkedChildren="On"
                  unCheckedChildren="Off"
                  defaultChecked={admin.status}
                />
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

export default EditAdmin;
