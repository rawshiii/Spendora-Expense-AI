import Budget from '../models/Budget.js';

export const getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({
      user: req.user.id,
    });

    res.json(budgets);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createBudget = async (
  req,
  res
) => {
  try {
    const budget = await Budget.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(budget);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};