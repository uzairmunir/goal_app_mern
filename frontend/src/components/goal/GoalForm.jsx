import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createGoal, reset } from '../../features/goalSlice/goalSlice';
import { toast } from 'react-toastify';
import './Goal.css';
import { useNavigate } from 'react-router-dom';
import Spinner from '../spinner/index';

const GoalForm = () => {
  const [text, setText] = useState('');
  const { isLoading, isSuccess } = useSelector((state) => state.goal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      toast.error('Please add goal');
    }
    if (text) {
      dispatch(createGoal({ text }));
      navigate('/');
    }
    if (isSuccess) {
    }
    // dispatch(reset());
    setText('');
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className='goal-form-container'>
      <h1>Create New Goal</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Add new goal'
        />
        <button type='submit'>Add Goal</button>
      </form>
    </div>
  );
};

export default GoalForm;
