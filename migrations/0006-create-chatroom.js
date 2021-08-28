'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) =>
      Promise.all([
        queryInterface.createTable('chatrooms', {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID
          },
          title: {
            type: Sequelize.STRING
          },
          cover: {
            allowNull: true,
            type: Sequelize.STRING
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
      await queryInterface.dropTable('chatrooms', { transaction: t })
    );
  }
};
