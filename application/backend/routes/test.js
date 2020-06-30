import express from 'express';
import { getTests, addTests, deleteTests } from '../controller/test';

const test = express.Router();

test.route('/').get(getTests).post(addTests);

// the '/:' allows params to be passed
test.route('/:id').delete(deleteTests);

export default test;
