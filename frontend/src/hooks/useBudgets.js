import { useEffect, useState } from 'react';
import api from '../services/api';

export default function useBudgets() {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    fetchBudgets();
  }, []);

  const fetchBudgets = async () => {
    try {
      const res = await api.get('/budgets');

      setBudgets(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    budgets,
    fetchBudgets,
  };
}