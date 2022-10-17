// 3rd Party Modules
const express = require('express');

// Local Modules
const BootNotificationController = require('../controllers/BootNotification');

// Initialization
const router = express.Router();

// Requests 
router.get('/BootNotificationReq', BootNotificationController.BootNotificationReq);
router.get('/BootNotificationRes', BootNotificationController.BootNotificationRes);

module.exports = router;