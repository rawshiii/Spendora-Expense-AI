import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
} from 'recharts';

import useAnalytics from '../hooks/useAnalytics';

const COLORS = [
  '#5F7A61',
  '#7C9D73',
  '#DDB892',
  '#A4BE7B',
  '#ADC178',
];

export default function Analytics() {
  const analytics = useAnalytics();

  return (
    <div className="flex min-h-screen bg-[#FCFCFA] text-[#1F2937]">
      <Sidebar />

      <main className="flex-1 p-8">
        <Navbar />

        <div className="mb-8">
          <h1 className="text-5xl font-bold">
            Financial Analytics
          </h1>

          <p className="text-slate-500 mt-2">
            Visualize your spending patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">
              Categories
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={
                    analytics?.categoryBreakdown ||
                    []
                  }
                  dataKey="value"
                  outerRadius={100}
                >
                  {(analytics?.categoryBreakdown ||
                    []).map(
                    (entry, index) => (
                      <Cell
                        key={index}
                        fill={
                          COLORS[
                            index %
                              COLORS.length
                          ]
                        }
                      />
                    )
                  )}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">
              Monthly Spending
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={
                  analytics?.monthlyTrend ||
                  []
                }
              >
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />

                <Bar
                  dataKey="amount"
                  fill="#4F6F52"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}