import db from '../database/db';
const bcrypt = require('bcrypt-nodejs');
const Sequelize = require('sequelize');

// defines schema for users table ('s' added by sequelize)
const User = db.define(
  'User',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },

    email: {
      type: Sequelize.STRING(100),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },

    first_name: {
      type: Sequelize.STRING(45),
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },

    last_name: {
      type: Sequelize.STRING(45),
      allowNull: false,
      validate: {
        isAlpha: true,
      },
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
      type: Sequelize.VIRTUAL,
      get() {
        return `${this.email}`.includes('@mail.sfsu.edu') ? true : false;
      },
      comment: 'whether the user has an sfsu email address',
    },
  },
  {
    hooks: {
      // hashes password + salt before storing password in db
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSalt(8);
        user.password = await bcrypt.hash(user.password, salt);
      },
    },
  }
);

// returns true if password is valid
User.prototype.validPassword = async (password) => {
  return await bcrypt.compare(password, this.password);
};

// returns true if user is admin 
User.prototype.isAdmin = async (type) => {
  return await compare(type, 'admin')
};

module.exports = User;
