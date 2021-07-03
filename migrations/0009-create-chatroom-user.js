'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) =>
      Promise.all([
        queryInterface.createTable('chatroom_users', {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID
          },

          isBlocked: {
            type: Sequelize.BOOLEAN,
            field: 'is_blocked',
          },
          role: {
            type: Sequelize.ENUM('admin', 'user'),
            field: 'is_blocked',
          },
          chatroomId: {
            references: {
              model: 'chatrooms',
              key: 'id'
            },
            type: Sequelize.UUID,
            field: 'chatroom_id',
          },
          userId: {
            references: {
              model: 'users',
              key: 'id'
            },
            type: Sequelize.UUID,
            field: 'user_id',
          },
        }, {transaction: t}),
      ])
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (t) =>
      await queryInterface.dropTable('chatroom_users', { transaction: t })
    );
  }
};
