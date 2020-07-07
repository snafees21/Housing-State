import connectDB from '../database/db';
const Sequelize = require('sequelize');

// defines schema for users table ('s' added by sequelize)
const User = connectDB.define('User', {
  id: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  },

  email: {
    type: Sequelize.STRING(100),
    unique: true,
    allowNull: false,
    primaryKey: true,
  },

  first_name: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },

  last_name: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },

  password: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },

  type: {
    type: Sequelize.STRING(20),
    allowNull: false,
    comment: 'can be: admin, student, professor, other',
  },

  sfsu_verified: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    comment: 'whether the user has an sfsu email address',
  },
});

module.exports = User;
