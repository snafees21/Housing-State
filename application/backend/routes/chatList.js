import express from 'express';
import { getChatList, addChatList } from '../controller/chatList';

const message = express.Router();

message.route('/').get(getChatList).post(addChatList);

export default message;
