import { useState } from "react";
import { Button, Modal } from "antd";
function Video(props) {
  const { url, name } = props;
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
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        {url}
      </Button>
      <Modal
        width={700}
        footer={null}
        title={name}
        open={isModalOpen}
        onOk={handleOk}
        style={{ top: "10%" }}
        onCancel={handleCancel}
      >
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/jSuDZSqcQvs?si=79YCO1-MGX9PVw2o"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
}

export default Video;
