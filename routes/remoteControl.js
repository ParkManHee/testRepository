// 3rd Party Modules
const express = require('express');

// Local Modules
const remoteControl = require('../controllers/remoteControl');

// Initialization
const router = express.Router();

// Requests 
router.post('/reset', remoteControl.remoteReset);
router.get('/chargingControl', remoteControl.remoteStart);

module.exports = router;