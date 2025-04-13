import { useState } from "react";
import { Button, Modal, Form, Input, message, Col, Row, Switch } from "antd";
import { Edit } from "lucide-react";
import { updateLession } from "../../../Services/lessionSerive";

function EditDetailLession(props) {
  const { lession, onReload } = props;
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
    const response = await updateLession((lession.id).toString(), values);
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
          initialValues={lession}
          onFinish={handleFinish}
          
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Name" name="title">
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
            <Col span={12}>
              <Form.Item label="Duration" name="duration">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Created At" name="createdAt">
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

export default EditDetailLession;
