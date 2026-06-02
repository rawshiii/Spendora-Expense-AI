import express from 'express';

import {
  getBudgets,
  createBudget,
} from '../controllers/budgetController.js';

import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post(
  '/',
  protect,
  createBudget
);

router.get(
  '/',
  protect,
  getBudgets
);

export default router;