import Expense from '../models/Expense.js';

export const getAnalytics = async (req, res) => {
  try {
    const expenses = await Expense.find({
      user: req.user.id,
    });

    const categoryMap = {};

    expenses.forEach((expense) => {
      if (!categoryMap[expense.category]) {
        categoryMap[expense.category] = 0;
      }

      categoryMap[expense.category] += expense.amount;
    });

    const categoryBreakdown = Object.entries(categoryMap).map(
      ([name, value]) => ({
        name,
        value,
      })
    );

    const monthlyMap = {};

expenses.forEach((expense) => {
  const date = expense.expenseDate
    ? new Date(expense.expenseDate)
    : new Date();

  const month = date.toLocaleString('default', {
    month: 'short',
  });

  if (!monthlyMap[month]) {
    monthlyMap[month] = 0;
  }

  monthlyMap[month] += expense.amount;
});

const monthlyTrend = Object.entries(monthlyMap).map(
  ([month, amount]) => ({
    month,
    amount,
  })
);

    res.json({
      categoryBreakdown,
      monthlyTrend,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};