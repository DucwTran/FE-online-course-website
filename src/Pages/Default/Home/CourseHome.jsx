import { useEffect, useState } from "react";
import { ButtonRoute } from "../../../Components/ButtonRoute";
import { CardCourse } from "../../../Components/CardCourse";
import { getAllCourses } from "../../../Services/courseService";

function CourseHome() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getAllCourses();
      if (res) {
        const popularCourse = res.slice(0, 6);
        setCourses(popularCourse);
      }
    };
    fetchAPI();
  }, []);
  return (
    <div className="bg-[url(/image/bg-course-home.png)]">
      <div className="max-w-[1080px] mx-auto pb-[150px]">
        <div className="flex flex-col 2xl:flex-row justify-between items-center py-12 ">
          <div className="max-w-[400px] flex flex-col justify-center items-center 2xl:block ml-10 3xl:ml-0">
            <div className="bg-[#E9E2FF] text-[#704FE6] w-[170px] p-2 text-center text-[10px]">
              TOP POPULAR COURSE
            </div>
            <h1 className="pt-3 font-bold text-[35px] text-center 2xl:text-left">
              Edunity Course student can join with us.
            </h1>
          </div>
          <div className="scale-75">
            <ButtonRoute value={"Load More Course"} route={"/all-courses"} />
          </div>
        </div>
        <div className="grid gap-x-16 gap-y-20 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {courses.map((item, index) => (
            <div className="flex items-center justify-center w-full" key={index}>
              <CardCourse key={index} course={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseHome;
