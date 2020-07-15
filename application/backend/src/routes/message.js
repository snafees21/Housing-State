import express from 'express';
import { getMessages, addMessages } from '../controller/message';

const message = express.Router();

message.route('/').get(getMessages).post(addMessages);

export default message;
