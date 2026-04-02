import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000/api/auth' });

export const register = (data) => API.post('/register', data);
export const login = (data) => API.post('/login', data);
export const verifyEmail = (token) => API.get(`/verify-email?token=${token}`); // ✅ fixed
export const logout = () => API.get('/logout');