import express from 'express';

import { protect } from '../middleware/authMiddleware.js';

import {
  exportExpensesCSV,
} from '../controllers/exportController.js';

const router = express.Router();

router.get(
  '/csv',
  protect,
  exportExpensesCSV
);

export default router;