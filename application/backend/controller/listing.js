const Listing = require('../models/listing');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// route: GET /api/listing
exports.searchListings = async (req, res, next) => {
  try {
    let where = {
      [Op.or]: [
        // match on address or city or zip or unit_type or offer_type or bedrooms or cost
        { full_address: { [Op.like]: `%${req.query.search_term}%` } },
        { city: { [Op.eq]: req.query.search_term } },
        { zip_code: { [Op.eq]: req.query.search_term } },
        { unit_type: { [Op.eq]: req.query.unit_type } },
        { offer_type: { [Op.eq]: req.query.offer_type } },
        { bedrooms: { [Op.lte]: req.query.bedrooms } },
        { cost: { [Op.lte]: req.query.cost } },
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
  // unpacks key, values of req.body to provide
  // {column: value} association
  try {
    await Listing.create(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// route: GET /api/listing/:id
exports.getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findByPk(req.params.id);
    res.send(listing);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// route: PATCH /api/listing/:id
exports.updateListing = async (req, res, next) => {
  try {
    // finds listing by primary key, then updates.
    // will update as many fields as are passed into the body
    const listing = await Listing.findByPk(req.params.id);
    await listing.update(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// route: DELETE /api/listing/:id
exports.deleteListing = async (req, res, next) => {
  try {
    // finds listing by primary key, then calls destroy on it
    const listing = await Listing.findByPk(req.params.id);
    await listing.destroy();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// route: GET /api/listing/user/:id
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
