import { useEffect, useState } from 'react';
import api from '../services/api';

export default function useBudgetProgress() {
  const [progress, setProgress] =
    useState([]);

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      const res = await api.get(
        '/budget-progress'
      );

      setProgress(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return progress;
}