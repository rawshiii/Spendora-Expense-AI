import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

import {
  Trash2,
  Search,
  Pencil,
} from 'lucide-react';

import api from '../../services/api';

import EditExpenseModal from './EditExpenseModal';

export default function ExpenseList({
  refreshKey,
}) {
  const [expenses, setExpenses] =
    useState([]);

  const [search, setSearch] =
    useState('');

  const [category, setCategory] =
    useState('All');

  const [
    selectedExpense,
    setSelectedExpense,
  ] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, [refreshKey]);

  const fetchExpenses =
    async () => {
      try {
        const res =
          await api.get(
            '/expenses'
          );

        setExpenses(
          res.data
        );
      } catch (error) {
        console.log(error);
      }
    };

  const deleteExpense =
    async (id) => {
      try {
        await api.delete(
          `/expenses/${id}`
        );

        toast.success(
          'Expense Deleted'
        );

        fetchExpenses();
      } catch (error) {
        toast.error(
          'Delete Failed'
        );
      }
    };

  const filteredExpenses =
    expenses.filter(
      (expense) => {
        const matchesSearch =
          expense.title
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesCategory =
          category === 'All'
            ? true
            : expense.category ===
              category;

        return (
          matchesSearch &&
          matchesCategory
        );
      }
    );

  return (
    <>
      <div
        className="
        bg-white
        border
        border-[#E5E7EB]
        rounded-3xl
        p-6
        shadow-sm
        "
      >
        <h2 className="text-2xl font-bold mb-6">
          Recent Expenses
        </h2>

        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search
              size={18}
              className="
              absolute
              left-4
              top-4
              text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Search expenses..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="
              w-full
              pl-12
              pr-4
              py-3
              border
              rounded-2xl
              "
            />
          </div>

          <select
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            className="
            px-4
            border
            rounded-2xl
            "
          >
            <option>All</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>
              Entertainment
            </option>
            <option>Health</option>
            <option>
              Investment
            </option>
          </select>
        </div>

        {filteredExpenses.length ===
        0 ? (
          <div className="text-center py-10">
            <h3 className="text-xl font-semibold">
              🔍 No matching
              expenses found
            </h3>

            <p className="text-slate-500 mt-2">
              Try changing your
              filters.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredExpenses.map(
              (expense) => (
                <div
                  key={
                    expense._id
                  }
                  className="
                  bg-[#F8F9F6]
                  border
                  border-[#E5E7EB]
                  rounded-2xl
                  p-4
                  "
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">
                        {
                          expense.title
                        }
                      </h3>

                      <p className="text-sm text-slate-500">
                        {
                          expense.category
                        }
                      </p>

                      <p className="mt-2 font-medium">
                        ₹
                        {
                          expense.amount
                        }
                      </p>

                      <p className="text-sm mt-2 text-slate-500">
                        {
                          expense.description
                        }
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() =>
                          setSelectedExpense(
                            expense
                          )
                        }
                      >
                        <Pencil
                          size={18}
                          className="
                          text-[#5F7A61]
                          "
                        />
                      </button>

                      <button
                        onClick={() =>
                          deleteExpense(
                            expense._id
                          )
                        }
                      >
                        <Trash2
                          size={18}
                          className="
                          text-red-500
                          "
                        />
                      </button>
                    </div>
                  </div>

                  {expense.receipt && (
                    <img
                      src={`http://localhost:5000/uploads/${expense.receipt}`}
                      alt="Receipt"
                      className="
                      w-32
                      h-32
                      object-cover
                      rounded-xl
                      mt-4
                      border
                      "
                    />
                  )}
                </div>
              )
            )}
          </div>
        )}
      </div>

      {selectedExpense && (
        <EditExpenseModal
          expense={
            selectedExpense
          }
          onClose={() =>
            setSelectedExpense(
              null
            )
          }
          refreshExpenses={
            fetchExpenses
          }
        />
      )}
    </>
  );
}