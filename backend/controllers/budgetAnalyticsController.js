import Budget from '../models/Budget.js';
import Expense from '../models/Expense.js';

export const getBudgetProgress = async (
  req,
  res
) => {
  try {
    const budgets = await Budget.find({
      user: req.user.id,
    });

    const expenses = await Expense.find({
      user: req.user.id,
    });

    const progress = budgets.map((budget) => {
      const spent = expenses
        .filter(
          (expense) =>
            expense.category === budget.category
        )
        .reduce(
          (sum, expense) =>
            sum + expense.amount,
          0
        );

      const percentage =
        budget.limit > 0
          ? Math.round(
              (spent / budget.limit) * 100
            )
          : 0;

      return {
        category: budget.category,
        limit: budget.limit,
        spent,
        remaining:
          budget.limit - spent,
        percentage,
        overBudget:
          spent > budget.limit,
      };
    });

    res.json(progress);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};