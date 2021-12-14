const getUsers = require('../users');

module.exports = (req, res, next) => {
  if (req.method == 'POST' && req.path == '/login') {
    if (req.body.username === 'user1' && req.body.password === 'user') {
      res.status(200).json(getUsers()[0]);
    } else if (
      req.body.username === 'admin1' &&
      req.body.password === 'admin'
    ) {
      res.status(200).json(getUsers()[1]);
    } else {
      res
        .status(400)
        .json({ message: 'Wrong credentials or user does not exist' });
    }
  } else {
    next();
  }
};
