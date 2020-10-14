'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const nodes = [
      {
        id: '229545c1-6f54-4942-be61-551efd1e9a83',
        orderId: '14ad1894-b718-464a-bc7d-b9433c6da724',
        productId: '39b39aab-8659-440f-bf8f-ece09ec01fd7',
        amount: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: '21b1c749-b4bc-49fd-bfa2-0727a22abcb9',
        orderId: '71d63bf3-10c2-4a27-98a6-fe873955b239',
        productId: '2383c760-d109-43e7-a941-55b8e8a4608a',
        amount: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: '402cfc83-5cff-4c17-a06d-e2b91d680909',
        orderId: '923a7210-0b77-47ed-8195-9766f20d6969',
        productId: '72ecb668-921b-4371-8dca-0717df8be642',
        amount: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: '399cdf19-7f26-4e73-9350-318d79396b58',
        orderId: '923a7210-0b77-47ed-8195-9766f20d6969',
        productId: '2dd3eceb-3e5f-4949-be38-12e2770f830e',
        amount: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];
    await queryInterface.bulkInsert('cart_products', nodes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cart_products', null, {});
  }
};
