import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchDashboardData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/dashboard`);
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};

export const fetchOrders = async (filters) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders`, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

