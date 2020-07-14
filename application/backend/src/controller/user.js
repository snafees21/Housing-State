const User = require('../models/user');

// route: GET /api/user
exports.getUsers = async (req, res, next) => {
  res.send('GET user'); // TODO: replace with actual code
};

// route: GET /api/user/:id
exports.validateUser = async (req, res, next) => {
  // return if user has sfsu email and if they are an admin
  res.send('POST user'); // TODO: replace with actual code
};

// route: POST /api/user
exports.addUser = async (req, res, next) => {
  res.send('POST user'); // TODO: replace with actual code
};

// route: POST /api/user/auth
exports.authenticateUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: res.body.email } });
    if (!user) {
      res.send({ sucess: false, message: 'Invalid Email' });
    } else if (!user.validPassword(res.body.password)) {
      res.send({ sucess: false, message: 'Invalid Password' });
    } else {
      res.send({ sucess: true, message: null });
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

// route: DELETE /api/user/:id
exports.deleteUsers = async (req, res, next) => {
  res.send('DELETE user'); // TODO: replace with actual code
};
