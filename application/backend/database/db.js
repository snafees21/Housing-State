const Sequelize = require('sequelize');

// credentials to log into database, these should live in a config file
// not added to git
const connectDB = new Sequelize('housing_state', 'root', 'G8t0r3s!', {
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

connectDB
  .authenticate()
  .then(() => console.log('Database conneted successfully'))
  .catch((error) => console.log('Error: ', error));

// sync all tables with database
// set to: sync({force: true}) to force drop and recreate of all tables on save (for dev testing)
connectDB.sync();

export default connectDB;
