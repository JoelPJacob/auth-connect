// src/utils/auth.js
import { STORAGE_KEY } from '../constants';

export const saveSession = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getSession = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};

export const clearSession = () => {
  localStorage.removeItem(STORAGE_KEY);
};
