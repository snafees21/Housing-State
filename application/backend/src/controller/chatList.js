const Sequelize = require('sequelize');
// const ChatList = require('../models/chatList');
// const Chat = require('../models/message');
// const User = require("../models/user");

const db = require("../models");
const ChatList = db.chat_list;
// const Chat = db.chat;

const { Op } = Sequelize;

// route: GET /api/message
exports.getChatList = async (req, res, next) => {
  try {
    const { fromUser } = req.query;
    const attributes = { exclude: ['password'] };
    const chatList = await ChatList.findAll({
      where: {
        [Op.or]: [
          {
            from_user: fromUser,
          },
          {
            to_user: fromUser,
          },
        ],
      },
      include: [{
        model: db.User,
        attributes,
        as: 'from',
      },{
        model: db.User,
        attributes,
        as: 'to',
      }]
    });
    res.status(200).json(chatList);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

// route: POST /api/
// eslint-disable-next-line no-unused-vars
exports.addChatList = async (req, res, next) => {
  try {
    const { fromUser, toUser, lastMessage } = req.body;
    if (fromUser && toUser && lastMessage) {
      // eslint-disable-next-line max-len
      ChatList.findOrCreate({ where: { from_user: fromUser, to_user: toUser }, defaults: req.body }).then(([chatList, created]) => {
        if (created === true) {
          const chatMessage = {
            text: lastMessage, from_user: fromUser, to_user: toUser, chat_id: chatList.id,
          };
          // eslint-disable-next-line no-unused-vars
          Chat.create(chatMessage).then((message) => {
            res.status(200).json({ message: 'success' });
          }).catch((err) => {
            throw new Error(err);
          });
        } else {
          res.status(400).json({ message: 'duplicate record' });
        }
      }).catch((e) => {
        res.status(400).json({ message: e.message });
      });
    } else {
      throw new Error('Param missing');
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
