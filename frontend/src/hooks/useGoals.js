import { useEffect, useState } from 'react';

import api from '../services/api';

export default function useGoals() {
  const [goals, setGoals] =
    useState([]);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const res = await api.get(
        '/goals'
      );

      setGoals(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    goals,
    fetchGoals,
  };
}