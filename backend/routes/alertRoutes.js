import express from 'express';

import { protect } from '../middleware/authMiddleware.js';

import {
  getAlerts,
} from '../controllers/alertController.js';

const router = express.Router();

router.get(
  '/',
  protect,
  getAlerts
);

export default router;