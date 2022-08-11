const express  = require('express');
const router = express.Router();
const getCtrl = require('../controllers/getCtrl');
const getPostsCtrl = require('../controllers/getPostCtrl');
const addPostsCtrl = require('../controllers/addPostsCtrl');


router.get("/", getCtrl);

router.get("/posts", getPostsCtrl);

router.post("/posts", addPostsCtrl);

module.exports = router