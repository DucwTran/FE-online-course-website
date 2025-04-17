import { Link, useParams } from "react-router-dom";
import HeaderAdmin from "../../../Components/HeaderAdminPage";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { getDetailCourse } from "../../../Services/courseService";
import Video from "./Video";
import { GoBack } from "../../../Components/GoBack";
import EditDetailLession from "./EditDetailLession";
import { getLessionsById } from "../../../Services/lessionService";
import EditDetailCourse from "./EditDetailCourse";
import { Button } from "antd";
import DeleteLession from "./DeleteLession";
import AddLession from "./AddLession";
import { getReviewById } from "../../../Services/reviewService";

function DetailCourseAdmin() {
  const param = useParams();
  const id = param.id;
  const [course, setCourse] = useState();
  const [lessions, setLessions] = useState([]);
  const [reviews, setReviews] = useState([]);

  const fetchAPICourse = useCallback(async () => {
    const res = await getDetailCourse(id);
    if (res) {
      setCourse(res);
    }
  }, [id]);
  const fetchAPILession = useCallback(async () => {
    const res = await getLessionsById(id);
    if (res) {
      setLessions(res);
    }
  }, [id]);
  const fetchAPIReview = useCallback(async () => {
    const res = await getReviewById(id);
    if (res) {
      setReviews(res);
    }
  }, [id]);
  useEffect(() => {
    fetchAPICourse();
    fetchAPILession();
    fetchAPIReview();
  }, [fetchAPICourse, fetchAPILession, fetchAPIReview]);

  const handleReload = () => {
    fetchAPICourse();
    fetchAPILession();
  };
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <HeaderAdmin title={`Detail Course: ${id}`} />

      <main className="max-w-[1180px] mx-auto py-6 px-4 lg:px-8">
        <GoBack target="/admin/courses" />
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-[20px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="ml-[80px] text-3xl font-bold mb-[30px]">
            Thông tin tổng quan
          </div>
          {course && (
            <div className="w-[80%] mx-auto">
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">Id:</div>{" "}
                <div> {course.id}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">Name:</div>{" "}
                <div> {course.title}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">
                  Language:
                </div>{" "}
                <div> {course.language}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">
                  description:
                </div>{" "}
                <div> {course.description}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">Price:</div>{" "}
                <div> {course.price}$</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">
                  Total Lessions:
                </div>{" "}
                <div> {course.totalLessions}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">
                  Enrolled:
                </div>{" "}
                <div> {course.enrolled}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">
                  Duration:
                </div>{" "}
                <div> {course.duration}h</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">
                  Create At:
                </div>{" "}
                <div> {course.createdAt}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">
                  Skill Level:
                </div>{" "}
                <div> {course.skillLevel}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">Active:</div>{" "}
                <div className="uppercase"> {course.status}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">Rating:</div>{" "}
                <div> {course.EstimalRate}</div>
              </div>
              <div className="flex gap-5 mb-[20px]">
                <div className="w-[180px] text-gray-300 uppercase">Edit:</div>{" "}
                <div>
                  <Button>
                    <EditDetailCourse course={course} onReload={handleReload} />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-[20px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-[30px]">
            <div className="ml-[50px] text-3xl font-bold">
              Danh sách các bài giảng
            </div>
            <div className="mr-[30px]">
              <AddLession idCourse={course?.id} />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Name
                  </th>
                  {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Description
                  </th> */}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Url
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>

              {lessions && (
                <tbody className="divide-y divide-gray-700">
                  {lessions.map((lession) => (
                    <motion.tr
                      key={lession.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                        {lession.title}
                      </td>
                      {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {lession.description}
                      </td> */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        <Video url={lession.url} name={lession.title} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {lession.duration}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 flex">
                        <div className="text-indigo-400 hover:text-indigo-300 mr-2 cursor-pointer">
                          <EditDetailLession
                            lession={lession}
                            onReload={handleReload}
                          />
                        </div>
                        <div className="text-red-400 hover:text-red-300 cursor-pointer">
                          <DeleteLession
                            lession={lession}
                            onReload={handleReload}
                          />
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </motion.div>

        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-[30px]">
            <div className="ml-[50px] text-3xl font-bold">
              Các nhận xét của học viên
            </div>
          </div>
          <div className="overflow-x-auto">
            {reviews.length === 0 ? (
              <div className="text-center text-gray-500">
                No reviews available.
              </div>
            ) : (
              reviews.map((review) => (
                <div className="mb-8 ml-[85px]" key={review.id}>
                  <div className="flex gap-2">
                    <div className="font-bold">{review.nameUser} ,</div>
                    <div className="text-gray-400">at {review.createdAt}</div>
                  </div>
                  <div className="italic ml-2">{review.comment}</div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default DetailCourseAdmin;
