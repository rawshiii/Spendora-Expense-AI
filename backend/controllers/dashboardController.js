import Expense from '../models/Expense.js';

export const getDashboardStats = async (req, res) => {
  try {
    const expenses = await Expense.find({
      user: req.user.id,
    });

    const totalExpenses = expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );

    const monthlyExpenses = expenses
      .filter(
        (expense) =>
          new Date(expense.expenseDate).getMonth() ===
          new Date().getMonth()
      )
      .reduce(
        (sum, expense) => sum + expense.amount,
        0
      );

    res.json({
      totalExpenses,
      monthlyExpenses,
      totalTransactions: expenses.length,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};