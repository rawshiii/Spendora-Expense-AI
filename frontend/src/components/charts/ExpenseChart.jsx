import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const data = [
  { month: 'Jan', amount: 2400 },
  { month: 'Feb', amount: 3200 },
  { month: 'Mar', amount: 2800 },
  { month: 'Apr', amount: 4100 },
  { month: 'May', amount: 3600 },
];

export default function ExpenseChart() {
  return (
    <div
      className="
      bg-white
      border
      border-[#E5E7EB]
      rounded-3xl
      p-6
      shadow-sm
      "
    >
      <h2 className="text-2xl font-bold mb-6 text-[#1F2937]">
        Expense Trends
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="expenseGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#4F6F52"
                stopOpacity={0.4}
              />

              <stop
                offset="95%"
                stopColor="#4F6F52"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="amount"
            stroke="#4F6F52"
            strokeWidth={3}
            fill="url(#expenseGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}