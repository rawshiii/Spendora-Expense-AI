import express from 'express';

import {
  getExpenses,
  createExpense,
  deleteExpense,
  updateExpense,
} from '../controllers/expenseController.js';

import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getExpenses);

router.post('/', protect, createExpense);

router.delete(
  '/:id',
  protect,
  deleteExpense
);

router.put(
  '/:id',
  protect,
  updateExpense
);

export default router;