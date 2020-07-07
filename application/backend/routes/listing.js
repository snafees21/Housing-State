import express from 'express';
import {
  getListings,
  addListings,
  deleteListings,
} from '../controller/listing';

const listing = express.Router();

listing.route('/').get(getListings).post(addListings);

// the '/:' allows params to be passed
listing.route('/:id').delete(deleteListings);

export default listing;
