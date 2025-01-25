// utils/request.js

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.push({
  request: (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
});

export const get = async (url, params) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const put = async (url, data) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteRequest = async (url, params) => {
  try {
    const response = await axiosInstance.delete(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const patch = async (url, data) => {
  try {
    const response = await axiosInstance.patch(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};




// example.js

import { get, post, put, deleteRequest, patch } from './utils/request';

// Make a GET request
get('/api/request/getall')
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

// Make a POST request
post('/api/request/register', { cms_id: 12345 })
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

// Make a PUT request
put('/api/request/update', { cms_id: 12345, date: new Date() })
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

// Make a DELETE request
deleteRequest('/api/request/delete', { cms_id: 12345 })
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

// Make a PATCH request
patch('/api/request/update', { cms_id: 12345, date: new Date() })
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
