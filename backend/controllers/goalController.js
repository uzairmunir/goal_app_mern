const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel');

//desc      Get Goals
//route     /api/goals
//access    Private

const getGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.find({ user: req.user.id });
  res.json(goal);
});

//desc      Set Goal
//route     /api/goals
//access    Private
const setGoal = asyncHandler(async (req, res) => {
  const text = req.body.text;
  if (!text) {
    return res.status(400).json({ msg: 'Please add Text field' });
  }
  const goal = await Goal.create({
    text,
    user: req.user.id,
  });
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
  // Check user
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(400).json({ msg: 'User Found' });
  }
  if (goal.user.toString() !== user.id) {
    return res.status(400).json({ msg: 'User not authorized ' });
  }
  const newGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(newGoal);
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
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(400).json({ msg: 'User not found' });
  }
  if (goal.user.toString() !== user.id) {
    return res.status(400).json({ msg: 'User not authorized ' });
  }
  goal.remove();
  res.json({ id: req.params.id });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
