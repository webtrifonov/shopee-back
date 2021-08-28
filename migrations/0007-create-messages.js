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
          message: {
            type: Sequelize.STRING,
          },
          isForwarded: {
            default: false,
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
          chatroomId: {
            references: {
              model: 'chatrooms',
              key: 'id',
            },
            type: Sequelize.UUID,
            field: 'chatroom_id',
          },
          createdAt: {
            type: Sequelize.DATE,
            field: 'created_at',
          },
          updatedAt: {
            type: Sequelize.DATE,
            field: 'updated_at',
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
