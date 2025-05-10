import { Flex, Rate } from "antd";
import {
  BookOutlined,
  FieldTimeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailCourse } from "../../../Services/courseService";

function DetailCourse() {
  const params = useParams();
  const id = params.id;
  const desc = ["Terrible", "Bad", "Normal", "Good", "Wonderful"];
  const [course, setCourse] = useState();
  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getDetailCourse(id);
      if (res) {
        setCourse(res);
      }
    };
    fetchAPI();
  }, [id]);
  console.log(course);
  return (
    <>
      {course ? (
        <>
          <div className="">
            {/* <div className="flex flex-col">
              <div className="bg-[url(/image/bg-header-all-courses.png)] h-[170px] md:h-[250px] w-full bg-cover flex justify-center items-center text-5xl md:text-[80px] font-[600]">
                Course Details
              </div>
            </div> */}
            <div className="flex-1 bg-[url(/image/bg-course-home.png)] pb-[100px]  bg-cover">
              <div className="max-w-[1280px] mx-auto pb-[50px] mt-10">
                <div className="grid grid-cols-3 gap-10">
                  <div className="col-span-2">
                    <div
                      style={{ backgroundImage: `url("${course.thumbnail}")` }}
                      className={`w-full h-[500px] bg-cover rounded-xl`}
                    ></div>
                    <div className="ml-5">
                      <div className="mt-7 flex gap-5 items-center">
                        <Flex gap="middle" vertical>
                          <Rate
                            style={{ color: "#FC6441" }}
                            tooltips={desc}
                            value={course.EstimateRate}
                            disabled
                          />
                        </Flex>
                      </div>
                      <h2 className="mt-6 text-4xl font-bold max-w-[600px]">
                        {course.title}
                      </h2>
                      <div className="mt-6">
                        <div className="px-3 py-2 flex justify-between items-center text-[15px] gap-2 max-w-[500px]">
                          <div className="flex justify-center items-center gap-1">
                            <BookOutlined />{" "}
                            <span>Lessions: {course.totalLessions}</span>
                          </div>
                          <div className="flex justify-center items-center gap-1">
                            <FieldTimeOutlined />{" "}
                            <span>Time: {course.duration}h</span>
                          </div>
                          <div className="flex justify-center items-center gap-1">
                            <UserOutlined />{" "}
                            <span>Student: {course.enrolled}+</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 w-full h-[2px] bg-gray-400"></div>
                      <div className="mt-6">
                        <div className="font-[600] mb-3 text-2xl">
                          COURSE DESCIPTION
                        </div>
                        <div>{course.description}</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#E8E8F4] h-[700px] flex flex-col items-center justify-center py-5">
                    <div
                      style={{ backgroundImage: `url("${course.thumbnail}")` }}
                      className={`bg-cover w-[80%] h-[230px] rounded-xl`}
                    ></div>
                    <div className="mt-5 flex justify-between w-[70%] mx-auto">
                      <div className="text-xl text-[#333931]">Course Fee</div>
                      <div className="flex justify-center text-2xl font-bold">
                        {course.price}VNĐ
                      </div>
                    </div>
                    <div className="cursor-pointer mt-5 w-[80%] text-2xl mx-auto h-[60px] px-4 py-8 rounded-xl bg-[#7768E5] text-white tracking-wide flex justify-center items-center">
                      <Link to={"/login"}> BUY NOW</Link>
                    </div>
                    <div className="w-[80%] mx-auto mt-10 text-[19px]">
                      <div className="flex justify-between items-center mb-3">
                        <div>Enrolled</div>
                        <div>{course.enrolled}</div>
                      </div>
                      <div className="flex justify-between items-center mb-3">
                        <div>Lectures</div>
                        <div>{course.totalLessions}</div>
                      </div>
                      <div className="flex justify-between items-center mb-3">
                        <div>Skill Level</div>
                        <div>{course.skillLevel}</div>
                      </div>
                      <div className="flex justify-between items-center mb-3">
                        <div>Language</div>
                        <div>{course.language}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>Đang tải dữ liệu</>
      )}
    </>
  );
}

export default DetailCourse;
