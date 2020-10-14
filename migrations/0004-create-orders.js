'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      userId: {
        references: {
          model: 'users',
          key: 'id',
        },
        type: Sequelize.UUID,
      },
      status: {
        values: [
          'placed',
          'cancelled',
          'received',
        ],
        defaultValue: 'placed',
        type: Sequelize.ENUM,
      },
      totalPrice: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  }
};
