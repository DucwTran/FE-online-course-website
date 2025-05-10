import { Button } from "antd";
import HeaderAdmin from "../../../Components/HeaderAdminPage";
import QuizzesTable from "./QuizzesTable";
import { Link } from "react-router-dom";

const OverviewQuiz = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <HeaderAdmin title="Quizzes" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <QuizzesTable />
        <div className="w-full flex justify-end">
          <Link to={"/admin/create-quiz"}>
            <Button type="primary">Tạo mới</Button>
          </Link>
        </div>
      </main>
    </div>
  );
};
export default OverviewQuiz;
