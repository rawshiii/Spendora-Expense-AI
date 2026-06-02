export default function GoalList({
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
        Your Goals
      </h2>

      <div className="space-y-4">
        {goals.map((goal) => (
          <div
            key={goal._id}
            className="
            p-4
            bg-[#F8F9F6]
            rounded-2xl
            "
          >
            <h3 className="font-semibold">
              {goal.title}
            </h3>

            <p>
              ₹
              {goal.currentAmount}
              /
              ₹
              {goal.targetAmount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}