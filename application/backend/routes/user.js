import express from 'express';
import { getUsers, addUsers, deleteUsers } from '../controller/user';

const user = express.Router();

user.route('/').get(getUsers).post(addUsers);

// the '/:' allows params to be passed
user.route('/:id').delete(deleteUsers);

export default user;
