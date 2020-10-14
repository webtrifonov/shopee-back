'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const nodes = [
      {
        id: 'f8d3de66-4f80-4f92-8c27-b02a5c886085',
        title: 'Hats',
        maxPrice: 200,
      }, {
        id: '94a34efa-c3a7-4f5e-99b9-8ce502825b50',
        title: 'Caps',
        maxPrice: 300,
      }, {
        id: 'e919f1e5-b67f-460e-b3e0-3b1570b1f510',
        title: 'Bandanas',
        maxPrice: 250,
      }, {
        id: '65b906f9-fe32-49eb-b703-a6c156151cbc',
        title: 'Ushanka',
        maxPrice: 180,
      }
    ];
    await queryInterface.bulkInsert('categories', nodes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
