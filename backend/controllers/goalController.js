const asyncHandler = require('express-async-handler');

//desc      Get Goals
//route     /api/goals
//access    Private

const getGoals = asyncHandler(async (req, res) => {
  res.json({ msg: 'Goals' });
});

//desc      Set Goal
//route     /api/goals
//access    Private
const setGoal = asyncHandler(async (req, res) => {
  res.json({ msg: 'Set Goal' });
});

//desc      Set Goal
//route     /api/goals/:id
//access    Private
const updateGoal = asyncHandler(async (req, res) => {
  res.json({ msg: 'update Goal' });
});

//desc      Delete Goal
//route     /api/goals/:id
//access    Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.json({ msg: 'Delete Goal' });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
