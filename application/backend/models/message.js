import db from '../database/db';

const Sequelize = require('sequelize');

// defines schema for messages table ('s' added by sequelize)
module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define('Message', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    from_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
        comment: 'foreign key, from `users` table, sender of the message',
      },
    },

    to_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
        comment: 'foreign key, from `users` table, recipient of the message',
      },
    },

    text: {
      type: Sequelize.STRING(1000),
      allowNull: false,
    },
    chat_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'chat_lists',
        key: 'id',
      },
    },
  });

  Message.associate = function (models) {
    Message.belongsTo(models.User, {
      as: 'sender',
      foreignKeyConstraint: true,
      foreignKey: 'from_user',
      targetKey: 'id'
    });
    Message.belongsTo(models.User, {
      as: 'receiver',
      foreignKeyConstraint: true,
      foreignKey: 'to_user',
      targetKey: 'id'
    });
    Message.belongsTo(models.chat_list, {
      foreignKeyConstraint: true,
      foreignKey: 'chat_id',
      targetKey: 'id'
    });
  };
  return Message;
};

// module.exports = Message;
