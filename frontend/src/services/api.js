import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Assurez-vous que l'URL correspond à votre back-end

export const getConversations = () => {
  return axios.get(`${API_URL}/conversations`);
};  

export const getMessages = (conversationId) => {
  return axios.get(`${API_URL}/messages`, { params: { conversationId } });
};

export const sendMessage = (data) => {
  return axios.post(`${API_URL}/messages`, data);
};
