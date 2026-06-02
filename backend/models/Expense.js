import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    receipt: {
  type: String,
},

    title: String,

    amount: Number,

    category: String,

    description: String,

    recurring: Boolean,

    expenseDate: Date,
    
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Expense', expenseSchema);