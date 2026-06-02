import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import expenseRoutes from './routes/expenseRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import budgetRoutes from './routes/budgetRoutes.js';
import budgetAnalyticsRoutes from './routes/budgetAnalyticsRoutes.js';
import exportRoutes from './routes/exportRoutes.js';
import insightsRoutes from './routes/insightsRoutes.js';
import pdfRoutes from './routes/pdfRoutes.js';
import goalRoutes from './routes/goalRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import alertRoutes from './routes/alertRoutes.js';


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/analytics', analyticsRoutes);

app.use('/api/dashboard', dashboardRoutes);

app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/budgets', budgetRoutes);
app.use('/api/budget-progress', budgetAnalyticsRoutes);
app.use('/api/export', exportRoutes);
app.use('/api/insights', insightsRoutes);
app.use('/api/pdf', pdfRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/alerts', alertRoutes);

export default app;