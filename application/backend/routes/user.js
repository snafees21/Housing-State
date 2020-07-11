import express from 'express';
import {
  getUsers,
  addUser,
  authenticateUser,
  deleteUsers,
} from '../controller/user';

const user = express.Router();

user.route('/').get(getUsers).post(addUser);
user.route('/auth/').post(authenticateUser);

// the '/:' allows params to be passed
user.route('/:id').delete(deleteUsers);

export default user;
