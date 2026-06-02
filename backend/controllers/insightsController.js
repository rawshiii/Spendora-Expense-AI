import Expense from '../models/Expense.js';
import Budget from '../models/Budget.js';
import Goal from '../models/Goal.js';

export const getInsights = async (
  req,
  res
) => {
  try {
    const expenses = await Expense.find({
      user: req.user.id,
    });

    const budgets = await Budget.find({
      user: req.user.id,
    });

    const goals = await Goal.find({
      user: req.user.id,
    });

    const insights = [];

    // Total Spending

    const totalSpent = expenses.reduce(
      (sum, expense) =>
        sum + expense.amount,
      0
    );

    insights.push(
      `💰 Total spending recorded: ₹${totalSpent}`
    );

    // Highest Category

    const categoryMap = {};

    expenses.forEach((expense) => {
      categoryMap[expense.category] =
        (categoryMap[
          expense.category
        ] || 0) + expense.amount;
    });

    let highestCategory =
      'None';

    let highestAmount = 0;

    Object.entries(
      categoryMap
    ).forEach(
      ([category, amount]) => {
        if (
          amount >
          highestAmount
        ) {
          highestCategory =
            category;

          highestAmount =
            amount;
        }
      }
    );

    if (
      highestCategory !==
      'None'
    ) {
      insights.push(
        `📊 Highest spending category: ${highestCategory} (₹${highestAmount})`
      );
    }

    // Budget Warnings

    budgets.forEach(
      (budget) => {
        const spent =
          expenses
            .filter(
              (e) =>
                e.category ===
                budget.category
            )
            .reduce(
              (
                sum,
                e
              ) =>
                sum +
                e.amount,
              0
            );

        const percent =
          budget.limit > 0
            ? (
                (spent /
                  budget.limit) *
                100
              ).toFixed(
                0
              )
            : 0;

        if (
          percent >=
          80
        ) {
          insights.push(
            `⚠ ${budget.category} budget is ${percent}% utilized`
          );
        }
      }
    );

    // Goal Progress

    goals.forEach(
      (goal) => {
        const progress =
          (
            (goal.currentAmount /
              goal.targetAmount) *
            100
          ).toFixed(
            0
          );

        insights.push(
          `🎯 Goal "${goal.title}" is ${progress}% complete`
        );
      }
    );

    // Savings Advice

    if (
      highestAmount > 0
    ) {
      const save =
        Math.round(
          highestAmount *
            0.1
        );

      insights.push(
        `💡 Reducing ${highestCategory} spending by 10% could save approximately ₹${save}`
      );
    }

    // Transaction Count

    insights.push(
      `🧾 Total transactions: ${expenses.length}`
    );

    res.json(
      insights
    );
  } catch (error) {
    res.status(500).json({
      message:
        error.message,
    });
  }
};