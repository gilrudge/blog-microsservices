const comments = require('../database/index')


const getPostCtrl = (req, res) => {
  res
      .status(200)
      .send(comments)
};

module.exports = getPostCtrl