import { useEffect, useState } from "react";
import CardEnrolledCourse from "../../../Components/CardEnrolledCourse";
import { Link } from "react-router-dom";
import { getAllEnrolledCourses } from "../../../Services/enrolledCourseService";

function ListCourse() {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getAllEnrolledCourses(id);
      if (res) {
        setCourses(res);
      }
    };
    fetchAPI();
  }, [id]);

  return (
    <div className="w-[80%] mx-auto mt-8">
      <div className="max-w-[1080px] mx-auto pb-[150px]">
        <div className="grid gap-x-16 gap-y-20 grid-cols-1 2xl:grid-cols-2 3xl:grid-cols-3">
          {courses.map((item, index) => (
            <div className="flex items-center justify-center w-full" key={index}>
              <Link to={`/user/detail-enrolled-course/${item.id}`}>
                <CardEnrolledCourse course={item} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListCourse;
