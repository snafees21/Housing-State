const User = require('../models/User');

// route: GET /api/user
exports.getUsers = async (req, res, next) => {
  res.send('GET user'); // TODO: replace with actual code
};

// route: POST /api/user
exports.addUsers = async (req, res, next) => {
  res.send('POST user'); // TODO: replace with actual code
};

// route: DELETE /api/user/:id
exports.deleteUsers = async (req, res, next) => {
  res.send('DELETE user'); // TODO: replace with actual code
};
