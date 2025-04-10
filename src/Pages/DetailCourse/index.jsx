import { Flex, Rate } from "antd";
import {
  BookOutlined,
  FieldTimeOutlined,
  UserOutlined,
} from "@ant-design/icons";

function DetailCourse() {
  const desc = ["Terrible", "Bad", "Normal", "Good", "Wonderful"];
  const value = 5;
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="bg-[url(/image/bg-header-all-courses.png)] h-[170px] md:h-[250px] w-full bg-cover flex justify-center items-center text-5xl md:text-[80px] font-[600]">
          Course Details
        </div>
      </div>
      <div className="flex-1 bg-[url(/image/bg-course-home.png)] pb-[100px]  bg-cover">
        <div className="max-w-[1280px] mx-auto pb-[50px] mt-10">
          <div className="grid grid-cols-3 gap-10">
            <div className="col-span-2">
              <div className="bg-[url(/image/img-course.png)] w-full h-[500px] bg-cover rounded-xl"></div>
              <div className="ml-5">
                <div className="mt-7 flex gap-5 items-center">
                  <Flex gap="middle" vertical>
                    <Rate
                      style={{ color: "#FC6441" }}
                      tooltips={desc}
                      value={value}
                    />
                  </Flex>
                  <span className="text-2xl">( {desc[value - 1]} )</span>
                </div>
                <h2 className="mt-6 text-4xl font-bold max-w-[600px]">
                  Web Development Fully Complete Guideline
                </h2>
                <div className="mt-6">
                  <div className="px-3 py-2 flex justify-between items-center text-[15px] gap-2 max-w-[500px]">
                    <div className="flex justify-center items-center gap-1">
                      <BookOutlined /> <span>Lession: 10</span>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                      <FieldTimeOutlined /> <span>Time: 19h30m</span>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                      <UserOutlined /> <span>Student: 20+</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 w-full h-[2px] bg-gray-400"></div>
                <div className="mt-6">
                  <div className="font-[600] mb-3 text-2xl">COURSE DESCIPTION</div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim.. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum..
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#E8E8F4] h-[700px] flex flex-col items-center justify-center py-5">
              <div className="bg-[url(/image/img-course.png)] bg-cover w-[80%] h-[230px] rounded-xl"></div>
              <div className="mt-5 flex justify-between w-[70%] mx-auto">
                <div className="text-xl text-[#333931]">Course Fee</div>
                <div className="flex justify-center text-2xl font-bold">
                  60$
                </div>
              </div>
              <div className="cursor-pointer mt-5 w-[80%] text-2xl mx-auto h-[60px] px-4 py-8 rounded-xl bg-[#7768E5] text-white tracking-wide flex justify-center items-center">
                BUY NOW
              </div>
              <div className="w-[80%] mx-auto mt-10 text-[19px]">
                <div className="flex justify-between items-center mb-3">
                  <div>Enrolled</div>
                  <div>100</div>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <div>Leatures</div>
                  <div>20</div>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <div>Skill Level</div>
                  <div>Basic</div>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <div>Language</div>
                  <div>English</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCourse;
