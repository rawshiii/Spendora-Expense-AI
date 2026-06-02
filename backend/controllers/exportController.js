import Expense from '../models/Expense.js';
import { Parser } from 'json2csv';

export const exportExpensesCSV = async (
  req,
  res
) => {
  try {
    const expenses = await Expense.find({
      user: req.user.id,
    });

    const fields = [
      'title',
      'amount',
      'category',
      'description',
      'expenseDate',
    ];

    const parser = new Parser({
      fields,
    });

    const csv = parser.parse(expenses);

    res.header(
      'Content-Type',
      'text/csv'
    );

    res.attachment('expenses.csv');

    return res.send(csv);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};