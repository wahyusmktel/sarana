const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const { roleId } = req.body; // Extract the roleId from the request body
    const newUser = await User.create(req.body, roleId);
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    // Send an error response
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

