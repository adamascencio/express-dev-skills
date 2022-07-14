var express = require('express');
var router = express.Router();
// Require our skills controller module
const skillsCtrl = require('../controllers/skills')

// All routes start with '/skills'

// GET /skills (index functionality - list all)
router.get('/', skillsCtrl.index);

// GET /skills/:id (show functionality - show one skill)
router.get('/:id', skillsCtrl.show);

module.exports = router;
