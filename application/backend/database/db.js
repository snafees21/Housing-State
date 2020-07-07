const Sequelize = require('sequelize');

// credentials to log into database, these should probably live somwhere else
const connectDB = new Sequelize('housing_state', 'root', 'G8t0r3s!', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 3000,
  },
});

connectDB
  .authenticate()
  .then(() => console.log('Database conneted successfully'))
  .catch((error) => console.log('Error: ', error));

export default connectDB;
