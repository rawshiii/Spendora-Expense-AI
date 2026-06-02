import { useEffect, useState } from 'react';
import api from '../services/api';

export default function useInsights() {
  const [insights, setInsights] =
    useState([]);

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    try {
      const res = await api.get(
        '/insights'
      );

      setInsights(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return insights;
}