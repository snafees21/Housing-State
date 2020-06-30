// All business logic goes here!
const Test = require('../models/Test');

// route: GET /api/test
exports.getTests = (req, res, next) => {
  Test.findAll()
    .then((tests) => {
      console.log(tests);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
};

// route: POST /api/test
exports.addTests = (req, res, next) => {
  res.send('POST test');
};

// route: DELETE /api/test/:id
exports.deleteTests = (req, res, next) => {
  res.send('DELETE test');
};
