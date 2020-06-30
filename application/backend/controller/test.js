// All business logic goes here!

// route: GET /api/test
exports.getTests = (req, res, next) => {
  res.send('GET test');
};

// route: POST /api/test
exports.addTests = (req, res, next) => {
  res.send('POST test');
};

// route: DELETE /api/test/:id
exports.deleteTests = (req, res, next) => {
  res.send('DELETE test');
};
