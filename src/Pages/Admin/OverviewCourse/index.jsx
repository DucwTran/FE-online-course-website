import { Button } from "antd";
import HeaderAdmin from "../../../Components/HeaderAdminPage";
import CoursesTable from "./CoursesTable";
import { Link } from "react-router-dom";

const OverviewCourse = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <HeaderAdmin title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <CoursesTable />
        <div className="w-full flex justify-end">
          <Link to={"/admin/create-course"}>
            <Button type="primary">Tạo mới</Button>
          </Link>
        </div>
      </main>
    </div>
  );
};
export default OverviewCourse;
