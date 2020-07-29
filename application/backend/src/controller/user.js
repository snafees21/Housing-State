const User = require('../models/user');
const Sequelize = require('sequelize');

// route: GET /api/user
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll(req.body);
    res.send(users);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// route: GET /api/user/:id
exports.validateUser = async (req, res, next) => {
  // return if user has sfsu email and if they are an admin
  try {
    const users = await User.findByPk(req.params.id);
    res.send(users);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// route: POST /api/user
exports.addUser = async (req, res, next) => {
  try {
    let user = User.findOne({ where: { email: req.body.email } });
    if (user) {
      res.send({ success: false, message: 'User with email already exists' });
    } else {
      user = await User.create(req.body);
      res.send({ success: true, ...user });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// route: POST /api/user/auth
exports.authenticateUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      res.send({ success: false, message: 'Invalid Email' });
    } else if (!user.validPassword(res.body.password)) {
      res.send({ success: false, message: 'Invalid Password' });
    } else {
      res.send({ success: true, message: null, ...user });
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

// route: DELETE /api/user/:id
exports.deleteUsers = async (req, res, next) => {
  try {
    // finds user by primary key, then calls destroy on it
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.sedStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
