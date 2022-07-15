var express = require('express');
var router = express.Router();
// Require our skills controller module
const skillsCtrl = require('../controllers/skills')

// All routes start with '/skills'

// GET /skills (index functionality - list all)
router.get('/', skillsCtrl.index);
// GET /skills/new (new functionality - show a form)
router.get('/new', skillsCtrl.new);
// GET /skills/:id (show functionality - show one skill)
router.get('/:id', skillsCtrl.show);
// POST /skills (create functionality - add new skill to todos)
router.post('/', skillsCtrl.create);
// DELETE /skills/:id (delete functionality - delete a specific skill) 
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
