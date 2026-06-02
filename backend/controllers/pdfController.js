import PDFDocument from 'pdfkit';
import Expense from '../models/Expense.js';

export const exportPDF = async (
  req,
  res
) => {
  try {
    const expenses = await Expense.find({
      user: req.user.id,
    });

    const total = expenses.reduce(
      (sum, e) => sum + e.amount,
      0
    );

    const doc = new PDFDocument();

    res.setHeader(
      'Content-Type',
      'application/pdf'
    );

    res.setHeader(
      'Content-Disposition',
      'attachment; filename=expense-report.pdf'
    );

    doc.pipe(res);

    doc
      .fontSize(24)
      .text(
        'Spendora-ExpenseAI Report',
        {
          align: 'center',
        }
      );

    doc.moveDown();

    doc
      .fontSize(18)
      .text(`Total Expenses: ₹${total}`);

    doc.moveDown();

    doc
      .fontSize(18)
      .text('Recent Expenses');

    doc.moveDown();

    expenses.forEach((expense) => {
      doc.text(
        `${expense.title} - ₹${expense.amount} (${expense.category})`
      );
    });

    doc.end();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};