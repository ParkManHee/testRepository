// const BootNotiReq = require('../types/BootNotification/BootNotificationReq');
// const BootNotiRes = require('../types/BootNotification/BootNotificationRes');

const BootNotificationReq = (req, res)=>{
    const boot = {
        asd : 'asd',
        few : 'few'    
    };
    res.status(200).send({boot: boot});
}

const BootNotificationRes = (req, res)=>{
    const boot = {
        currentTime : '2022-10-17',
        interval : '5',
        status : 'aewidfw'
    };
    res.status(200).send({boot: boot});
}

// Export of all methods as object
module.exports = {
    BootNotificationReq,
    BootNotificationRes
}