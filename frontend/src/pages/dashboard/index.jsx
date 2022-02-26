import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import GoalItem from '../../components/goal/GoalItem';
import { getGoals, reset } from '../../features/goalSlice/goalSlice';
import Spinner from '../../components/spinner';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goal
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='dashboard-container'>
      <section className='heading'>
        <h1>
          Welcome <span style={{ color: 'crimson' }}>{user && user.name}</span>
        </h1>
        <p>Goals Dashboard</p>
        <button className='goal-btn'>
          <Link to='/creategoal'>Create New Goal</Link>
        </button>
      </section>
      <section className='goals-grid'>
        {goals.length > 0 ? (
          goals.map((goal, index) => <GoalItem key={index} goal={goal} />)
        ) : (
          <h3
            style={{
              textAlign: 'center',
              marginTop: '1rem',
              fontSize: '2rem',
              color: '#333',
            }}
          >
            You have not set any goal yet
          </h3>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
