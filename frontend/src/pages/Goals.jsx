import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';

import GoalForm from '../components/goals/GoalForm';
import GoalList from '../components/goals/GoalList';
import GoalProgress from '../components/goals/GoalProgress';

import useGoals from '../hooks/useGoals';

export default function Goals() {
  const {
    goals,
    fetchGoals,
  } = useGoals();

  return (
    <div className="flex min-h-screen bg-[#FCFCFA]">
      <Sidebar />

      <main className="flex-1 p-8">
        <Navbar />

        <h1 className="text-5xl font-bold mb-8">
          Financial Goals
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GoalForm
            refreshGoals={
              fetchGoals
            }
          />

          <GoalList goals={goals} />
        </div>

        <div className="mt-6">
          <GoalProgress
            goals={goals}
          />
        </div>
      </main>
    </div>
  );
}