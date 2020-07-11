import db from '../database/db';
const Sequelize = require('sequelize');

// defines schema for listings table ('s' added by sequelize)
const Listing = db.define('Listing', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
    comment: 'foreign key, from `users` table',
  },

  building_num: {
    type: Sequelize.CHAR(4),
    allowNull: false,
    comment: 'up to 4 digit number identifying a building on a street',
  },

  street: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },

  city: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },

  state: {
    type: Sequelize.CHAR(2),
    allowNull: false,
  },

  zip_code: {
    type: Sequelize.CHAR(5),
    allowNull: false,
  },

  apt_suite: {
    type: Sequelize.STRING(45),
    allowNull: true,
    comment:
      'optional parameter specifiying appartment number within a building',
  },

  cost: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  unit_type: {
    type: Sequelize.STRING(45),
    allowNull: false,
    comment: 'can be one of: house, appartment, townhouse',
  },

  lease_length: {
    type: Sequelize.INTEGER(5),
    allowNull: true,
    comment: 'length of lease in months, if applicable',
  },

  offer_type: {
    type: Sequelize.STRING(45),
    allowNull: false,
    comment: 'rent, buy, or both',
  },

  bedrooms: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  bathrooms: {
    type: Sequelize.FLOAT(2, 1),
    allowNull: true,
    comment: 'whole number or x.5 for half bathrooms (i.e. 2.5 bath)',
  },

  furnished: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    comment: 'true if furnished, false if not',
  },

  sq_footage: {
    type: Sequelize.INTEGER(5),
    allowNull: true,
  },

  available_at: {
    type: Sequelize.DATEONLY,
    allowNull: true,
    comment: 'date the renter is allowed to move in',
  },

  description: {
    type: Sequelize.STRING(1000),
    allowNull: true,
    comment:
      'any additional information the poster wants to provide via free form text',
  },

  full_address: {
    // virtual columns to not exist in the db,
    // but can be calculated on the fly
    type: Sequelize.VIRTUAL,
    get() {
      return (
        this.getDataValue('building_num') +
        ' ' +
        this.getDataValue('street') +
        ', ' +
        this.getDataValue('city') +
        ', ' +
        this.getDataValue('state') +
        ' ' +
        this.getDataValue('zip_code')
      );
    },
  },
});

module.exports = Listing;
