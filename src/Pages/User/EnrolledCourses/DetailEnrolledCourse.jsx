import { useParams } from "react-router-dom";
import HeaderUser from "../../../Components/HeaderUserPage";
import { useEffect, useState } from "react";
import { BookOutlined, PlusOutlined } from "@ant-design/icons";
import { getEnrolledCoursesById } from "../../../Services/enrolledCourseService";
import {
  getEnrolledLessionsByCourseId,
  patchProgressEnrolledLession,
} from "../../../Services/enrolledLession";
import { Button, Modal, InputNumber, Form, Input } from "antd";
import { getFormattedDate } from "../../../Utils/dateTime";
import { postReview } from "../../../Services/reviewService";

function DetailEnrolledCourse() {
  const user = JSON.parse(localStorage.getItem("user"));
  const param = useParams();
  const id = param.id;
  const [course, setCourse] = useState();
  const [lessions, setLessions] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getEnrolledCoursesById(id);
      if (res) {
        setCourse(res);
        const res_lessions = await getEnrolledLessionsByCourseId(res.id);
        if (res_lessions) {
          setLessions(res_lessions);
        }
      }
    };
    fetchAPI();
  }, [id]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLession, setSelectedLession] = useState(null);
  const showModal = (lession) => {
    setSelectedLession(lession);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCompleteLession = async () => {
    const result = {
      isCompleted: true,
      completedAt: getFormattedDate(),
    };
    const res = await patchProgressEnrolledLession(selectedLession.id, result);
    if (res) {
      setLessions((prev) =>
        prev.map((item) =>
          item.id === selectedLession.id ? { ...item, ...result } : item
        )
      );
    }
    setIsModalOpen(false);
  };

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  const onFinish = async (values) => {
    const result = {
      ...values,
      userId: user.id,
      nameUser: user.fullName,
      courseId: id,
      createdAt: getFormattedDate(),
    };
    const res = await postReview(result);
    if (res) {
      setIsModalOpen2(false);
    }
  };
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <HeaderUser title={course?.title} />

      <div className="flex relative">
        <div className="flex-1/3">
          {course && (
            <main className="max-w-6xl mx-auto py-6 px-4 lg:px-8">
              <h2 className="ml-10 text-2xl italic">Danh sách bài học</h2>
              <div className="w-[70%] ml-10">
                {lessions.map((lession) => (
                  <div
                    key={lession.id}
                    className="my-8 border-gray-400 cursor-pointer border-2 py-5 px-7 rounded-xl flex justify-between"
                    onClick={() => showModal(lession)}
                  >
                    <div className="flex gap-3 items-center">
                      <div>
                        <BookOutlined />
                      </div>
                      <div>{lession.title}</div>
                    </div>
                    <div>
                      {lession.isCompleted ? (
                        <>
                          <div className="text-green-700">Hoàn thành</div>
                        </>
                      ) : (
                        <>
                          <div className="text-red-700">Chưa hoàn thành</div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </main>
          )}
        </div>
        <Modal
          title={selectedLession?.title || "Thông tin bài học"}
          open={isModalOpen}
          onOk={handleOk}
          width={1200}
          onCancel={handleCancel}
          centered
          footer={[
            <Button
              key="complete"
              type="primary"
              onClick={handleCompleteLession}
            >
              Đánh dấu hoàn thành
            </Button>,
          ]}
          destroyOnClose
        >
          {selectedLession ? (
            <div>
              <iframe
                key={selectedLession.id}
                width="1150"
                height="562"
                src={selectedLession.url}
                title={selectedLession.description}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <p>Đang tải dữ liệu...</p>
          )}
        </Modal>
        {course && (
          <div className="absolute flex-1/4 top-20 right-10 border-2 h-[280px] w-[300px] border-gray-400 rounded-xl py-5 px-4">
            <div className="mt-3 mb-5">
              <span className="font-bold italic">Description</span>:{" "}
              {course.description}
            </div>
            <div className="mb-5">
              <span className="font-bold italic">Totals Lession</span>:{" "}
              {course.totalLessions}
            </div>
            <div className="mb-5">
              <span className="font-bold italic">Level</span>:{" "}
              {course.skillLevel}
            </div>
            <div className="mb-5">
              <span className="font-bold italic">Duration</span>:{" "}
              {course.duration}
            </div>
            <Button type="primary" className="mt-10" onClick={showModal2}>
              <PlusOutlined /> Nhận xét
            </Button>
            <Modal
              title="Thêm nhận xét cho khóa học này"
              open={isModalOpen2}
              onOk={handleOk2}
              onCancel={handleCancel2}
              footer={null}
            >
              <div className="w-full flex justify-center items-center mt-10">
                <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  style={{ maxWidth: 600 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Nhận xét"
                    name="comment"
                    rules={[
                      {
                        required: true,
                        message: "Please input your comment!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Rate(1-5)"
                    name="rating"
                    rules={[
                      {
                        required: true,
                        message: "Please input your rating!",
                      },
                    ]}
                  >
                    <InputNumber min={1} max={5} />
                  </Form.Item>
                  <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailEnrolledCourse;
