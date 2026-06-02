import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';

import BudgetForm from '../components/budgets/BudgetForm';
import BudgetList from '../components/budgets/BudgetList';
import BudgetProgress from '../components/budgets/BudgetProgress';

import useBudgets from '../hooks/useBudgets';

export default function Budgets() {
  const {
    budgets,
    fetchBudgets,
  } = useBudgets();

  return (
    <div className="flex min-h-screen bg-[#FCFCFA] text-[#1F2937]">
      <Sidebar />

      <main className="flex-1 p-8">
        <Navbar />

        <h1 className="text-5xl font-bold mb-8">
          Budget Planner
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BudgetForm
            refreshBudgets={fetchBudgets}
          />

          <BudgetList
            budgets={budgets}
          />
        </div>

        <div className="mt-6">
          <BudgetProgress
            budgets={budgets}
          />
        </div>
      </main>
    </div>
  );
}