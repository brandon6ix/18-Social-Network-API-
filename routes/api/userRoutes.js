const express = require('express');
const router = express.Router();
const { User, Thought } = require('../../models');

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update user by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Add a friend to a user's friend list
router.post('/:id/friends/:friendId', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, 
      { $addToSet: { friends: req.params.friendId } }, 
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Remove a friend from a user's friend list
router.delete('/:id/friends/:friendId', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, 
      { $pull: { friends: req.params.friendId } }, 
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
