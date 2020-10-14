'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const nodes = [
      {
        id: '14ad1894-b718-464a-bc7d-b9433c6da724',
        userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        status: 'placed',
        totalPrice: 250,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: '71d63bf3-10c2-4a27-98a6-fe873955b239',
        userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        status: 'cancelled',
        totalPrice: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: '923a7210-0b77-47ed-8195-9766f20d6969',
        userId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        status: 'received',
        totalPrice: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];
    await queryInterface.bulkInsert('orders', nodes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  }
};
