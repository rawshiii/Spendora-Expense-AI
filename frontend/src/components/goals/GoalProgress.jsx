export default function GoalProgress({
  goals,
}) {
  return (
    <div
      className="
      bg-white
      border
      border-[#E5E7EB]
      rounded-3xl
      p-6
      "
    >
      <h2 className="text-2xl font-bold mb-6">
        Goal Progress
      </h2>

      <div className="space-y-6">
        {goals.map((goal) => {
          const percentage =
            (goal.currentAmount /
              goal.targetAmount) *
            100;

          return (
            <div key={goal._id}>
              <div className="flex justify-between mb-2">
                <span>
                  {goal.title}
                </span>

                <span>
                  {Math.round(
                    percentage
                  )}
                  %
                </span>
              </div>

              <div className="h-3 bg-gray-200 rounded-full">
                <div
                  className="h-3 bg-[#4F6F52] rounded-full"
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}