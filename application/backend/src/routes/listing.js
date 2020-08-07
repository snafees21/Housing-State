import express from 'express';
import {
  searchListings,
  getListingByUserId,
  addListing,
  updateListing,
  deleteListing,
  getUnapprovedListings,
} from '../controller/listing';
const upload = require('../utils/storage');

const listing = express.Router();

listing
  .route('/')
  .get(searchListings)
  .post(upload.single('listingImage'), addListing);

listing.route('/:id').patch(updateListing).delete(deleteListing);

listing.route('/user/:id').get(getListingByUserId);

listing.route('/unapproved').get(getUnapprovedListings);

export default listing;
