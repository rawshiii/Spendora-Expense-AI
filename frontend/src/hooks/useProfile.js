import { useEffect, useState } from 'react';
import api from '../services/api';

export default function useProfile() {
  const [profile, setProfile] =
    useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await api.get(
        '/auth/profile'
      );

      setProfile(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return profile;
}