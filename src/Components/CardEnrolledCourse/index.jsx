import {
  BookOutlined,
  FieldTimeOutlined,
  UserOutlined,
} from "@ant-design/icons";

function CardEnrolledCourse(props) {
  const { course } = props;
  return (
    <div className="flex bg-white rounded-2xl justify-center items-center w-[270px] max-h-[1000px] 4xl:scale-110">
      <div className="p-4 border-1 border-dotted border-[#704FE6] w-[350px] rounded-xl ">
        <div
          style={{ backgroundImage: `url("${course.thumbnail}")` }}
          className="h-[183px] w-full rounded-xl bg-cover"
        ></div>
        <div className="flex flex-col items-center justify-center ">
          <h2 className="max-w-[85%] font-[600] text-[20px] mt-[20px] mb-2 h-[60px] leading-6 text-center">
            {course.title}
          </h2>
          <div className="bg-gray-700 px-3 py-2 text-white flex justify-between items-center w-[95%] text-[11px] gap-4">
            <div className="flex justify-center items-center gap-1">
              <BookOutlined /> <span>Finish: {course.progress}/{course.totalLessions}</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <FieldTimeOutlined /> <span>Total time: {course.duration}h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardEnrolledCourse;
