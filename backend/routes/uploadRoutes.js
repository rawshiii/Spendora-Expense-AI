import express from 'express';

import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.post(
  '/',
  upload.single('receipt'),
  (req, res) => {
    res.json({
      filePath:
        req.file.filename,
    });
  }
);

export default router;