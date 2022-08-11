const posts = require('../database/index');

let status = 200;

const getPostsCtrl = (req, res) => {
  
  try {
    res
        .status(status)
        .send(posts)

  } catch (error) {
    console.log(error);
    
  }};

  module.exports = getPostsCtrl