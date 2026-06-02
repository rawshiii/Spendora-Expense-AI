export default function BudgetList({
  budgets,
}) {
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
      <h2 className="text-2xl font-bold mb-6">
        Budget Limits
      </h2>

      {budgets.length === 0 ? (
        <p className="text-slate-500">
          No budgets created yet.
        </p>
      ) : (
        <div className="space-y-4">
          {budgets.map((budget) => (
            <div
              key={budget._id}
              className="
              bg-[#F8F9F6]
              border
              border-[#E5E7EB]
              rounded-2xl
              p-4
              "
            >
              <div className="flex justify-between">
                <span>
                  {budget.category}
                </span>

                <span>
                  ₹{budget.limit}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}