const Listing = require('../models/Listing');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// route: GET /api/listing
exports.getListings = (req, res, next) => {
  Listing.findAll({where: {full_address: {[Op.like]: '%ey%'}}})
    .then((listings) => {
      console.log(listings);
      res.send(listings);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    }); // TODO: replace with actual code
};

// route: POST /api/listing
exports.addListings = (req, res, next) => {
  res.send('POST listing'); // TODO: replace with actual code
};

// route: DELETE /api/listing/:id
exports.deleteListings = (req, res, next) => {
  res.send('DELETE listing'); // TODO: replace with actual code
};
