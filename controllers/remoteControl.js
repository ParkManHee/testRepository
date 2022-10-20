const mq = require('../utils/rabbitMQ');

const remoteStart = (req, res)=>{
    res.status(200).send();
}

const remoteStop = (req, res)=>{
    res.status(200).send();
}

const remoteReset = async (req, res)=>{
    console.log("remoteReset");
    const exchangeName = 'remoteReq';
    
    const msg = req.body || {};

    const sendMessage = await mq.send(exchangeName, { Message: msg });

    const response = await mq.listenMesaage(exchangeName);

    console.log(response);

    res.status(200).send({ send: sendMessage, response: response});
}

// Export of all methods as object
module.exports = {
    remoteStart,
    remoteStop,
    remoteReset,
}