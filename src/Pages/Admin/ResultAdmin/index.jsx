// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ResultsTableAdmin from "./ResultsTableAdmin";
import HeaderAdmin from "../../../Components/HeaderAdminPage";

function ResultsAdmin() {
  return (
    <div className="h-full w-full overflow-auto">
      <div className="z-10">
        <HeaderAdmin title={"Results"} />
        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
          <ResultsTableAdmin />
        </main>
      </div>
    </div>
  );
}

export default ResultsAdmin;
