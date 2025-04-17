import HeaderUser from "../../../Components/HeaderUserPage";
import ListCourse from "./ListCourse";

const EnrolledCourses = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <HeaderUser title='Enrolled Courses' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <ListCourse />
      </main>
    </div>
  );
};
export default EnrolledCourses;
