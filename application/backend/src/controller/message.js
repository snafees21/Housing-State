const Sequelize = require('sequelize');
const db = require("../models");
const Message = db.Message;
// route: GET /api/message
exports.getMessages = async (req, res, next) => {
  try {
    // eslint-disable-next-line camelcase
    const { chat_id } = req.query;
    const attributes = { exclude: ['password'] };
    const messages = await Message.findAll({
      where:{
        chat_id,
      },
      order: [
        ['createdAt', 'DESC'],
      ],
      include: [{
        model: db.User,
        attributes,
        as: 'sender',
      },{
        model: db.User,
        attributes,
        as: 'receiver',
      }]
    });
    res.status(200).json(messages);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

// route: POST /api/message
exports.addMessages = async (req, res, next) => {
  try {
    const msg = await Message.create(req.body);
    res.status(200).send('success');
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
