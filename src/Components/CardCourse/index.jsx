import {
  BookOutlined,
  FieldTimeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ButtonRoute } from "../ButtonRoute";

export function CardCourse(props) {
  const { course } = props;
  return (
    <div className="flex justify-center items-center w-[330px] max-h-[1000px] 4xl:scale-110">
      <div className="p-4 border-1 border-dotted border-[#704FE6] w-[350px] rounded-xl ">
        <div className="bg-[url('/image/img-course.png')] h-[253px] w-full rounded-xl bg-cover"></div>
        <div className="flex flex-col items-center justify-center ">
          <h2 className="max-w-[85%] font-[600] text-[20px] mt-[20px] text-left h-[60px] leading-6">
            {course.title}
          </h2>
          <div className="bg-white px-3 py-2 flex justify-between items-center text-[11px] gap-2">
            <div className="flex justify-center items-center gap-1">
              <BookOutlined /> <span>Lession: {course.totalLesions}</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <FieldTimeOutlined /> <span>Time: {course.duration}h</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <UserOutlined /> <span>Student: {course.enrolled}</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2 w-full">
            <div className="ml-5 font-bold text-[20px]">{course.price}$</div>
            <div className="scale-75">
              <ButtonRoute value={"Enroll Now"} route={`/detail-course/${course.id}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
