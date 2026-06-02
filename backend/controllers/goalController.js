import Goal from '../models/Goal.js';

export const getGoals = async (
  req,
  res
) => {
  try {
    const goals = await Goal.find({
      user: req.user.id,
    });

    res.json(goals);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createGoal = async (
  req,
  res
) => {
  try {
    const goal = await Goal.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(goal);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};