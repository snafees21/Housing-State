import express from 'express';
import {
  searchListings,
  getListing,
  getListingByUserId,
  addListing,
  updateListing,
  deleteListing,
} from '../controller/listing';

const listing = express.Router();

listing.route('/').get(searchListings).post(addListing);

// the '/:' allows params to be passed
listing
  .route('/:id')
  .get(getListing)
  .patch(updateListing)
  .delete(deleteListing);

listing.route('/user/:id').get(getListingByUserId);

export default listing;
