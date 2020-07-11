import db from '../database/db';
const Sequelize = require('sequelize');

//dedfines schema for listings table ('s' added by sequelize)
const Media = db.define('Media', {
    id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },

    listing_id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        references: {
            model: 'listings',
            key: 'id',
        },
        comment: 'foreign key, from `listings` table',
    },

    data: {
        type: Sequelize.BLOB('long'),
        allowNull: false,
    },
});

module.exports = Media; 