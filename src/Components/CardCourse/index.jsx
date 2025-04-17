import {
  BookOutlined,
  FieldTimeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ButtonRoute } from "../ButtonRoute";

export function CardCourse(props) {
  const { course } = props;
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex justify-center items-center w-[330px] max-h-[1000px] 4xl:scale-110">
      <div className="p-4 border-1 border-dotted border-[#704FE6] w-[350px] rounded-xl ">
        <div
          style={{ backgroundImage: `url("${course.thumbnail}")` }}
          className="h-[253px] w-full rounded-xl bg-cover"
        ></div>
        <div className="flex flex-col items-center justify-center ">
          <h2 className="max-w-[85%] font-[600] text-[20px] mt-[20px] text-left h-[60px] leading-6">
            {course.title}
          </h2>
          <div className="bg-white px-3 py-2 flex justify-between items-center text-[11px] gap-2">
            <div className="flex justify-center items-center gap-1">
              <BookOutlined /> <span>Lession: {course.totalLessions}</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <FieldTimeOutlined /> <span>Time: {course.duration}h</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <UserOutlined /> <span>Student: {course.enrolled}</span>
            </div>
          </div>
          <div className={`flex ${!user ? 'justify-between' : 'justify-center'} items-center mt-3 w-full `}>
            <div className="ml-5 font-[500] text-[20px]">{course.price}$</div>
            {!user && (
              <div className="scale-75">
                <ButtonRoute
                  value={"Enroll now"}
                  route={`detail-course/${course.id}`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
