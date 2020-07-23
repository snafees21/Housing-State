module.exports = (sequelize, Sequelize) => {
  const ChatList = sequelize.define('chat_list', {
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

    lastMessage: {
      type: Sequelize.STRING(1000),
      required: true,
    },
  });

  ChatList.associate = function (models) {
    ChatList.belongsTo(models.User, {
      as: 'from', foreignKeyConstraint: true, foreignKey: 'from_user', targetKey: 'id',
    });
    ChatList.belongsTo(models.User, {
      as: 'to', foreignKeyConstraint: true, foreignKey: 'to_user', targetKey: 'id',
    });
    ChatList.hasMany(models.Message, { foreignKey: 'chat_id' });
  };
  return ChatList;
};
