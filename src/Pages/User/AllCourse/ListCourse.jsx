import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCourses } from "../../../Services/courseService";
import { CardCourse } from "../../../Components/CardCourse";

function ListCourse() {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getAllCourses();
      if (res) {
        setCourses(res);
      }
    };
    fetchAPI();
  }, [id]);

  return (
    <div className="w-[80%] mx-auto mt-8">
      <div className="max-w-[1080px] mx-auto pb-[150px]">
        <div className="grid gap-x-20 gap-y-10 grid-cols-1 2xl:grid-cols-2 3xl:grid-cols-3">
          {courses.map((item, index) => (
            <div  key={index} className="flex items-center justify-center w-full scale-90">
              <Link to={`/user/detail-course-user/${item.id}`}>
                <CardCourse course={item} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListCourse;
