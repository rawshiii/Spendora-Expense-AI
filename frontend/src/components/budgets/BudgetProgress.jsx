export default function BudgetProgress({
  budgets = [],
}) {
  if (budgets.length === 0) {
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
          Budget Progress
        </h2>

        <p className="text-slate-500">
          No budgets available yet.
        </p>
      </div>
    );
  }

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
        Budget Progress
      </h2>

      <div className="space-y-6">
        {budgets.map((budget) => (
          <div key={budget._id}>
            <div className="flex justify-between mb-2">
              <span>
                {budget.category}
              </span>

              <span>
                ₹0 / ₹
                {budget.limit}
              </span>
            </div>

            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="
                h-full
                bg-gradient-to-r
                from-[#4F6F52]
                to-[#739072]
                "
                style={{
                  width: '0%',
                }}
              />
            </div>

            <div className="mt-2 text-sm text-slate-500">
              Remaining ₹
              {budget.limit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}