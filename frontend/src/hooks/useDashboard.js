import { useEffect, useState } from 'react';
import api from '../services/api';

export default function useDashboard(refreshKey) {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats();
  }, [refreshKey]);

  const fetchStats = async () => {
    try {
      const res = await api.get('/dashboard');

      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return stats;
}