const express = require('express');
const router = express.Router();

const getCtrl = require('../controllers/getCtrl');
const getPostCtrl = require('../controllers/getPostCtrl')
const addPostCtrl = require('../controllers/addPostCtrl')




router.get('/', getCtrl);

router.get('/comments', getPostCtrl);

router.post('/comments', addPostCtrl);


module.exports = router