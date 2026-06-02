import express from 'express';

import { protect } from '../middleware/authMiddleware.js';

import {
  getBudgetProgress,
} from '../controllers/budgetAnalyticsController.js';

const router = express.Router();

router.get(
  '/',
  protect,
  getBudgetProgress
);

export default router;