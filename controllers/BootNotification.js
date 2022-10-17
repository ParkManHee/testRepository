const BootNotificationReq = require('../types/BootNotification/BootNotificationReq');
const BootNotificationRes = require('../types/BootNotification/BootNotificationRes');

const BootNotificationReq = (req, res)=>{
    const res = BootNotificationReq.getBootNotificationReq(1,1,1,1,1,1,1,1,1,1);
    res.status(200).send({boot: res});
}

const BootNotificationRes = (req, res)=>{
    const res = BootNotificationRes.getBootNotificationRes(1,1,1);
    res.status(200).send({boot: res});
}

// Export of all methods as object
module.exports = {
    BootNotificationReq,
    BootNotificationRes
}