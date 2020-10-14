const bcrypt = require('bcrypt');
const salt = 10;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const nodes = [
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        email: 'dtrifonov100@gmail.com',
        password: '$2b$10$M7J3GNO77Kxt2nQ2wl60TOIk1vayo8stA7sDZSi7V5G/1GCRgf.9i', // 123456
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        email: 'dtrifonov101@gmail.com',
        password: '$2b$10$plUScuXhm2Cmu6Y6f/u5RucH6NrNPllKQU3KRtaj2f44Cv3G8Mu8.',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 'b0fda54e-349b-4059-b379-149ea6aa770b',
        email: 'dtrifonov102@gmail.com',
        password: bcrypt.hashSync('123456', salt),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
    await queryInterface.bulkInsert('users', nodes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
