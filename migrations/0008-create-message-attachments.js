'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) =>
      Promise.all([
        queryInterface.createTable('message_attachments', {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID
          },
          url: {
            type: Sequelize.STRING,
          },
          messageId: {
            references: {
              model: 'messages',
              key: 'id'
            },
            type: Sequelize.UUID,
            field: 'message_id',
          },
        }, {transaction: t}),
      ])
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (t) =>
      await queryInterface.dropTable('message_attachments', { transaction: t })
    );
  }
};
