const devConfig = {
  username: 'postgres',
  password: '123456',
  database: 'shopee',
  host: 'localhost',
  dialect: 'postgres',
  postgresPort: 5432,
};
const prodConfig = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOSTNAME,
  dialect: 'postgres',
  postgresPort: 5432,
}
module.exports = {
  development: devConfig,
  test: devConfig,
  production: prodConfig
};
