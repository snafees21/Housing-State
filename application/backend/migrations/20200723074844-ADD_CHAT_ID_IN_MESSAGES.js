'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('messages', 'chat_id', {
          type: Sequelize.INTEGER,
          allowNull: false,
          referenceces: {
            model: 'chat_lists',
            key: 'id',
          },
        }, { transaction: t }),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};
