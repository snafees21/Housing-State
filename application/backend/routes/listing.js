import express from 'express';
import {
  searchListings,
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
  .get(getListingByUserId)
  .patch(updateListing)
  .delete(deleteListing);

export default listing;
