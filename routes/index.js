// Author name: Rushin Barvadia
// Student Id: 301227529
// WebApp name: COMP229022-W2022-Midterm-302117529
var express = require('express');
var router = express.Router();
let controllerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controllerIndex.home);

module.exports = router;
