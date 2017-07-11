const express = require('express');
const router = express.Router();

const index = require('../views/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(index({ title: 'Express' }));
});

module.exports = router;
