// database related stuff goes in here!
import connectDB from '../database/db';
const Sequelize = require('sequelize');

const Test = connectDB.define('test', {
  title: {
    type: Sequelize.STRING,
  },
});

module.exports = Test;
