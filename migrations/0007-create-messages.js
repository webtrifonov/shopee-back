'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) =>
      Promise.all([
        queryInterface.createTable('messages', {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID
          },
          isForwarded: {
            type: Sequelize.BOOLEAN,
            field: 'is_forwarded',
          },
          replyTo: {
            references: {
              model: 'messages',
              key: 'id',
            },
            type: Sequelize.UUID,
            field: 'reply_to',
          },
        }, {transaction: t}),
      ])
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (t) =>
      await queryInterface.dropTable('messages', { transaction: t })
    );
  }
};
