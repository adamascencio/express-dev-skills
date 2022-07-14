var express = require('express');
var router = express.Router();
// Require our skills controller module
const skillsCtrl = require('../controllers/skills')

// All routes start with '/skills'

/* GET /skills (index functionality - list all) */
router.get('/', skillsCtrl.index);

module.exports = router;
