const multer = require('multer');

const storage = multer.diskStorage({
  destination: 'public/',
  filename: (req, file, cb) => {
    // eventually it would be nice to add the user_id to the img name
    const fileType = file.mimetype.split('/')[1];
    const filename = `${file.fieldname}-${Date.now()}.${fileType}`;
    cb(null, filename);
  },
  limits: { fieldSize: 25 * 1024 * 1042 },
});

const upload = multer({ storage: storage });

module.exports = upload;
