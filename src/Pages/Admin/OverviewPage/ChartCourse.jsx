// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { getOverview } from "../../../Services/overviewService";

const COLORS = ["#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const ChartCourse = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getOverview();
      if (res) {
        const data = [
          { name: "English", value: res.totalEL },
          { name: "Korean", value: res.totalKorean },
          { name: "Chinese", value: res.totalChinese },
          { name: "Japanese", value: res.totalJapanese },
        ];
        setCategoryData(data);
      }
    };
    fetchAPI();
  }, []);

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Chart of Course
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={categoryData}
              cx={"50%"}
              cy={"50%"}
              labelLine={false}
              outerRadius={80}
              dataKey="value"
              fill="#8884d8"
              label={({ name, percent, value }) =>
                value > 0 ? `${name} ${(percent * 100).toFixed(0)}%` : ""
              }
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ChartCourse;
