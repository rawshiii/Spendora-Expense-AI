import { useEffect, useState } from 'react';

import api from '../services/api';

export default function useAlerts() {
  const [alerts, setAlerts] =
    useState([]);

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    try {
      const res = await api.get(
        '/alerts'
      );

      setAlerts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return alerts;
}