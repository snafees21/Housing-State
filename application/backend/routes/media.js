import express from 'express';
// will eventually need to add updateImage
import { 
    getMedia, 
    addMedia, 
    deleteMedia,
    getMediaByListingId,
} from '../controller/media';

const media = express.Router();

media.route('/').get(getMedia).post(addMedia);

// the '/:' allows params to be passed
media
    .route('/:id')
    //.patch(updateMedia)
    .delete(deleteMedia);

// this may be attached to the user?
media.route('/listing/:id').get(getMediaByListingId);

export default media;