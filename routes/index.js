// 3rd Party Modules
const express = require('express');

// Local Modules
const myController = require('../controllers/controller');

// Initialization
const router = express.Router();

// Requests 
router.get('/', myController.method1);
router.post('/', myController.method2);

module.exports = router;