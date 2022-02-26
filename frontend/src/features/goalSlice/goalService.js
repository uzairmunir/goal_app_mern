import axios from 'axios';

// Create new Goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      ['auth-token']: token,
    },
  };
  const response = await axios.post('/api/goals/', goalData, config);
  return response.data;
};
// Get all Goals
const getGoals = async (token) => {
  const config = {
    headers: {
      ['auth-token']: token,
    },
  };
  const response = await axios.get('/api/goals', config);

  return response.data;
};
// Delete Goal
const deleteGoal = async (id, token) => {
  const config = {
    headers: {
      ['auth-token']: token,
    },
  };
  const response = await axios.delete(`/api/goals/${id}`, config);
  return response.data;
};
const goalService = { createGoal, getGoals, deleteGoal };

export default goalService;
