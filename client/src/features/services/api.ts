import { api } from '../../lib/axios';

export const fetchServices = async () => {
  const res = await api.get('/services');
  return res.data;
};

export const createService = async (data: { title: string; description: string }) => {
  const res = await api.post('/services', data);
  return res.data;
};
