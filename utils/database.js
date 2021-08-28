import { Sequelize } from 'sequelize';
import config from '../config/config';

const {username, password, database, host, dialect, postgresPort} = config[process.env.NODE_ENV || 'development'];

 const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  port: postgresPort,
});
export default sequelize;
