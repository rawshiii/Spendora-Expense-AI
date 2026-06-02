import express from 'express';

import { protect } from '../middleware/authMiddleware.js';

import { exportPDF } from '../controllers/pdfController.js';

const router = express.Router();

router.get(
  '/',
  protect,
  exportPDF
);

export default router;