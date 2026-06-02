import Expense from '../models/Expense.js';

export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      user: req.user.id,
    });

    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createExpense = async (req, res) => {
  try {
    const expense = await Expense.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);

    res.json({
      message: 'Expense deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateExpense = async (
  req,
  res
) => {
  try {
    const expense =
      await Expense.findById(
        req.params.id
      );

    if (!expense) {
      return res
        .status(404)
        .json({
          message:
            'Expense not found',
        });
    }

    const updated =
      await Expense.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(updated);
  } catch (error) {
    res.status(500).json({
      message:
        error.message,
    });
  }
};