import { ButtonRoute } from "../../../Components/ButtonRoute";
import { CardCourse } from "../../../Components/CardCourse";
import { useEffect, useState } from "react";
import { getAllCourses } from "../../../Services/courseService";
function AllCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getAllCourses();
      if (res) {
        setCourses(res);
      }
    };
    fetchAPI();
  }, []);
  console.log(courses);
  return (
    <>
      <div>
        <div className="bg-[url(/public/image/bg-header-all-courses.png)] h-[170px] md:h-[250px] w-full bg-cover flex justify-center items-center text-5xl md:text-[80px] font-[600]">
          All Courses
        </div>
      </div>
      <div className="bg-[url(/image/bg-course-home.png)]">
        <div className="max-w-[1080px] mx-auto pb-[150px]">
          <div className="flex flex-col 2xl:flex-row justify-between items-center py-12 ">
            <div className="max-w-[400px] flex flex-col justify-center items-center 2xl:block ml-10 3xl:ml-0">
              <h1 className="pt-3 font-bold text-[35px] text-center 2xl:text-left">
                Edunity Course student can join with us.
              </h1>
            </div>
          </div>
          <div className="grid gap-x-16 gap-y-20 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
            {courses.map((item, index) => (
              <div className="flex items-center justify-center w-full">
                <CardCourse key={index} course={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCourses;
