import express from 'express';
import {
  searchListings,
  getListing,
  getListingByUserId,
  addListing,
  updateListing,
  deleteListing,
} from '../controller/listing';
const upload = require('../utils/storage');

const listing = express.Router();

listing
  .route('/')
  .get(searchListings)
  .post(upload.single('listingImage'), addListing);

listing
  .route('/:id')
  .get(getListing)
  .patch(updateListing)
  .delete(deleteListing);

listing.route('/user/:id').get(getListingByUserId);

export default listing;