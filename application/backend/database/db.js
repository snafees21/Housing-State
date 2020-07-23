const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'production';
const config = require(__dirname + '/../config/config.json')[env];
// credentials to log into database, these should live in a config file
// not added to git
const db = new Sequelize('housing_state', 'root', 'G8t0r3s!', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
const db = new Sequelize(config.database, config.username, config.password, config);

db.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch((error) => console.log('Error: ', error));

// sync all tables with database
// set to: sync({force: true}) to force drop and recreate of all tables on save (for dev testing)
db.sync();

export default db;
