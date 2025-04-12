import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { StatCard } from "../../../Components/StatCard";
import HeaderAdmin from "../../../Components/HeaderAdminPage";
import { useEffect, useState } from "react";
import { getOverview } from "../../../Services/overviewService";
// import SalesOverviewChart from "../components/overview/SalesOverviewChart";
// import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
// import SalesChannelChart from "../components/overview/SalesChannelChart";

const OverviewPage = () => {
  const [overview, setOverview] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getOverview();
      if (res) {
        setOverview(res);
      }
    };
    fetchAPI();
  }, []);
  
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <HeaderAdmin title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        {overview && (
          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <StatCard
              name="Total Profits"
              icon={Zap}
              value={`${overview.totalProfits}$`}
              color="#6366F1"
            />
            <StatCard
              name="Total Users"
              icon={Users}
              value={`${overview.totalUsers}`}
              color="#8B5CF6"
            />
            <StatCard
              name="Total Courses"
              icon={ShoppingBag}
              value={`${overview.totalCourses}`}
              color="#EC4899"
            />
            <StatCard
              name="Total Enrollment"
              icon={BarChart2}
              value={`${overview.totalEnrollments}`}
              color="#10B981"
            />
          </motion.div>
        )}

        {/* CHARTS */}

        {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<SalesOverviewChart />
					<CategoryDistributionChart />
					<SalesChannelChart />
				</div> */}
      </main>
    </div>
  );
};
export default OverviewPage;
