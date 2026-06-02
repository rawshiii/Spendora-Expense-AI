import { useEffect, useState } from 'react';
import api from '../services/api';

export default function useAnalytics() {
  const [analytics, setAnalytics] =
    useState(null);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await api.get('/analytics');

      setAnalytics(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return analytics;
}