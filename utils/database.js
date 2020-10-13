const {Sequelize} = require('sequelize');
const config = require('../config/config');

const {username, password, database, host, dialect, postgresPort} = config[process.env.NODE_ENV];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  port: postgresPort,
})
module.exports = sequelize;
