import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../../features/goalSlice/goalSlice';
import { toast } from 'react-toastify';
import './Goal.css';

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();
  return (
    <div className='goal-items'>
      <p>{new Date(goal.createdAt).toLocaleString('en-us')}</p>
      <h3>{goal.text}</h3>
      <button onClick={() => dispatch(deleteGoal(goal._id))}>Delete</button>
    </div>
  );
};

export default GoalItem;
