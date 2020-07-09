const Listing = require('../models/Listing');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// route: GET /api/listing
exports.searchListings = async (req, res, next) => {
  try {
    let where = {
      [Op.or]: [
        // match on address or unit_type or offer_type or bedrooms or cost
        { full_address: { [Op.like]: `%${req.body.full_address}%` } },
        { unit_type: { [Op.eq]: req.body.unit_type } },
        { offer_type: { [Op.eq]: req.body.offer_type } },
        { bedrooms: { [Op.lte]: req.body.bedrooms } },
        { cost: { [Op.lte]: req.body.cost } },
      ],
    };
    const listings = await Listing.findAll({ where: where });
    res.send(listings);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// route: POST /api/listing
exports.addListing = async (req, res, next) => {
  try {
    await Listing.create(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// route: GET /api/listing/:id
exports.getListingByUserId = async (req, res, next) => {
  try {
    const listings = await Listing.findAll({
      where: { user_id: req.params.id },
    });
    res.send(listings);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// route: PATCH /api/listing/:id
exports.updateListing = async (req, res, next) => {
  console.log(req.body);
  try {
    await Listing.update(req.body, { where: { user_id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// route: DELETE /api/listing/:id
exports.deleteListing = async (req, res, next) => {
  res.send('DELETE listing'); // TODO: replace with actual code
};
