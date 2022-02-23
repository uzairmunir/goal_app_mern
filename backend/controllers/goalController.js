const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

//desc      Get Goals
//route     /api/goals
//access    Private

const getGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.find();
  res.json(goal);
});

//desc      Set Goal
//route     /api/goals
//access    Private
const setGoal = asyncHandler(async (req, res) => {
  const text = req.body;
  if (!text) {
    return res.status(400).json({ msg: 'Please add Text field' });
  }
  const goal = await Goal.create(text);
  res.status(200).json(goal);
});

//desc      Set Goal
//route     /api/goals/:id
//access    Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  // Check for goal
  if (!goal) {
    return res.status(400).json({ msg: 'Goal Not Found' });
  }
  const newGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({ msg: 'Goal Updated' });
});

//desc      Delete Goal
//route     /api/goals/:id
//access    Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  // Check for goal
  if (!goal) {
    return res.status(400).json({ msg: 'Goal Not Found' });
  }
  goal.remove();
  res.json({ msg: 'Goal deleted' });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
