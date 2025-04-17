import HeaderUser from "../../../Components/HeaderUserPage";
import ListCourse from "./ListCourse";

const AllCourseUser = () => {
  return (
    <div className='h-full overflow-auto relative z-10'>
      <HeaderUser title='All Courses' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <ListCourse />
      </main>
    </div>
  );
};
export default AllCourseUser;
