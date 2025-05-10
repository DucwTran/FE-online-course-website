import HeaderUser from "../../../Components/HeaderUserPage";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ResultsTable from "./ResultsTable";

function Results() {
  return (
    <div className="h-full overflow-auto">
      <div className="z-10">
        <HeaderUser title={"Results"} />
        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
          <ResultsTable />
        </main>
      </div>
    </div>
  );
}

export default Results;
