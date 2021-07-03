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
            allowNull: true,
            type: Sequelize.STRING
          },
          cover: {
            allowNull: true,
            type: Sequelize.STRING
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
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
