// 3rd Party Modules
const { Router } = require('express');

// Local Modules
const myController = require('../controllers/controller');

// Initialization
const router = Router();

// Requests 
router.get('/', myController.method1);
router.post('/', myController.method2);

module.exports = router;