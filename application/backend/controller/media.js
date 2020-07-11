/* This needs a lot of work, we can use 
   fs.readFileSync('/path/to/file') and 
   fs.writeFileSync('/path/to/file', media.data)
   to read and write to the file DB. 
*/

const Media = require('../models/Media');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// roure: GET /api/media/:id
exports.getMedia = async (req, res, next) => {
    try {
        //const media = await Media.findByPk(req.params.id);
        res.send(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

// route: POST /api/media
exports.addMedia = async (req, res, next) => {
    try { 
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

// route: DELETE /api/media/:id
exports.deleteMedia = async (req, res, next) => {
    try {
        // finds media by primary key, then uses 'destroy' to delete it
        const media = await Media.findByPk(req.params.id);
        await media.destroy();
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

// route: GET /api/media/listing/:id
exports.getMediaByListingId = async (req, res, next) => {
    try {
        const media = await Media.findAll({
            where: { listing_id: req.params.id},
        });
        res.send(media);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};