import { useState } from 'react';

import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';

import StatCard from '../components/cards/StatCard';
import ExpenseChart from '../components/charts/ExpenseChart';
import ExpenseForm from '../components/forms/ExpenseForm';
import ExpenseList from '../components/expenses/ExpenseList';
import AIInsights from '../components/dashboard/AIInsights';
import FloatingBlobs from '../components/ui/FloatingBlobs';

import ExportButton from '../components/export/ExportButton';
import PDFButton from '../components/export/PDFButton';

import useDashboard from '../hooks/useDashboard';
import AlertCard from '../components/dashboard/AlertCard';

export default function Dashboard() {
  const [refreshKey, setRefreshKey] = useState(0);

  const stats = useDashboard(refreshKey);

  const refreshDashboard = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="flex min-h-screen bg-[#F6F8F4] text-[#1F2937] overflow-hidden">
     <FloatingBlobs/>

      <Sidebar />

      <main className="flex-1 p-8 relative z-10">
        <Navbar />

        <div className="flex justify-end gap-4 mb-6">
          <ExportButton />
          <PDFButton />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Expenses"
            value={stats?.totalExpenses || 0}
          />

          <StatCard
            title="Monthly Expenses"
            value={stats?.monthlyExpenses || 0}
          />

          <StatCard
            title="Transactions"
            value={stats?.totalTransactions || 0}
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
         <ExpenseChart />

<AlertCard />

<ExpenseForm
  onExpenseAdded={
    refreshDashboard
  }
/>

<ExpenseList
  refreshKey={refreshKey}
/>

<AIInsights />
        </div>
      </main>
    </div>
  );
}