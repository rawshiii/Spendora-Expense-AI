import Budget from '../models/Budget.js';
import Expense from '../models/Expense.js';

export const getAlerts = async (
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

    const alerts = [];

    budgets.forEach((budget) => {
      const spent = expenses
        .filter(
          (expense) =>
            expense.category ===
            budget.category
        )
        .reduce(
          (sum, expense) =>
            sum + expense.amount,
          0
        );

      const percentage =
        (spent / budget.limit) * 100;

      if (percentage >= 100) {
        alerts.push({
          type: 'danger',
          message: `${budget.category} budget exceeded by ₹${
            spent - budget.limit
          }`,
        });
      } else if (
        percentage >= 80
      ) {
        alerts.push({
          type: 'warning',
          message: `${budget.category} budget is ${Math.round(
            percentage
          )}% used`,
        });
      }
    });

    res.json(alerts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};