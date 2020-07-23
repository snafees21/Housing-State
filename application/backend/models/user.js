
const bcrypt = require('bcrypt-nodejs');

// defines schema for users table ('s' added by sequelize)
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
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
        primaryKey: true,
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
  User.prototype.isAdmin = async (email) => {
    return await true; // TODO
  };

  User.associate = (models) => {
    User.hasMany(models.Message, { as: 'sender', foreignKey: 'from_user' });
    User.hasMany(models.Message, { as: 'receiver', foreignKey: 'to_user' });
    User.hasMany(models.chat_list, { as: 'from', foreignKey: 'from_user' });
    User.hasMany(models.chat_list, { as: 'to', foreignKey: 'to_user' });
  };
  return User;
};

// module.exports = User;
